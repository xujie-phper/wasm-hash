// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

import init, {
    source,
    create_hash as createHash,
    update_hash as updateHash,
    digest_hash as digestHash,
    DenoHash,
} from "./hash_init.js";

import * as hex from "./encoding/hex";
import * as base64 from "./encoding/base64";
import type {Hasher, Message, OutputFormat} from "./hash.d";

(async function(){
    await init(source);
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
}

export default Hash;
