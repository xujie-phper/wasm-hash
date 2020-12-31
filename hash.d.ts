export type Message = string | ArrayBuffer | any;
export type OutputFormat = "hex" | "base64";

export interface Hasher {
  update(data: Message): this;
  end(data: [], cb: Function): this;
  digest(): ArrayBuffer;
  toString(format?: OutputFormat): string;
}
