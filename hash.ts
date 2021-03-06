import init, {
    create_hash as createHash,
    update_hash as updateHash,
    digest_hash as digestHash,
    DenoHash,
} from "./hash_init.js";

import * as hex from "./encoding/hex";
import * as base64 from "./encoding/base64";
import type {Hasher, Message, OutputFormat} from "./hash.d";

(async function () {
    await init('https://staticiot.cdn.bcebos.com/union/hash_bg.wasm');
})();

// await init('./hash_bg.wasm');

const TYPE_ERROR_MSG = "hash: `data` is invalid type";

class Hash implements Hasher {
    _hash: DenoHash;
    _digested: boolean;

    constructor(algorithm: string) {
        this._hash = createHash(algorithm);
        this._digested = false;
    }

    /**
     * Update internal state
     * @param data data to update
     */
    update(data: Message): this {
        let msg: Uint8Array;

        if (typeof data === "string") {
            msg = new TextEncoder().encode(data as string);
        } else if (typeof data === "object") {
            if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
                // @ts-ignore
                msg = new Uint8Array(data);
            } else {
                throw new Error(TYPE_ERROR_MSG);
            }
        } else {
            throw new Error(TYPE_ERROR_MSG);
        }

        updateHash(this._hash, msg);

        return this;
    }

    /**
     * end internal state
     * @param data data to end
     * @param cb
     */
    end(data: [], cb: Function) {
        if (typeof data !== "object") {
            throw new Error(TYPE_ERROR_MSG);
        }

        // @ts-ignore
        if (typeof data[0] !== "object") {
            throw new Error(TYPE_ERROR_MSG);
        }

        let self = this;
        let count = 0;
        // @ts-ignore
        this.fiber(function* () {
            while (count < data.length) {
                updateHash(self._hash, data[count++]);
                yield;
            }

            const hash = self.toString();
            cb(hash);
        })();

        return this;
    }

    /** Returns final hash */
    digest(): ArrayBuffer {
        if (this._digested) throw new Error("hash: already digested");

        this._digested = true;
        return digestHash(this._hash);
    }

    /**
     * Returns hash as a string of given format
     * @param format format of output string (hex or base64). Default is hex
     */
    toString(format: OutputFormat = "hex"): string {
        const finalized = new Uint8Array(this.digest());

        switch (format) {
            case "hex":
                return hex.encodeToString(finalized);
            case "base64":
                return base64.encode(finalized);
            default:
                throw new Error("hash: invalid format");
        }
    }

    /**
     * Returns
     * @param gen gen to time slice
     */
    fiber(gen: any) {
        if (typeof gen === 'function') gen = gen();
        if (!gen || typeof gen.next !== 'function') return;
        return function next() {
            const start = performance.now();
            let res = null;
            do {
                res = gen.next()
            } while (!res.done && performance.now() - start < 50);

            if (res.done) return;
            setTimeout(next)
        }
    }
}

export default Hash;
