// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

export type Message = string | ArrayBuffer | any;
export type OutputFormat = "hex" | "base64";

export interface Hasher {
  update(data: Message): this;
  end(data: [], cb: Function): this;
  digest(): ArrayBuffer;
  toString(format?: OutputFormat): string;
}
