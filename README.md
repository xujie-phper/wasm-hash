## 基于WASM计算文件md5的工具
> 使用WebAssembly计算string或者ArrayBuffer的hash值，可以快速计算文件的md5值.

### 使用方式

1. npm安装

```
npm install wasm-hash 
```

2. 项目使用

```js

import Hash from 'wasm-hash';

//单个分片计算
const hash = new Hash('md5');
const md5 = hash.update(arrayBuffer).toString();



//整个文件计算，将切好的arrayBuffer数组直接传给end即可

const hash = new Hash('md5');
hash.end(arrayBuffers,(md5) => {
    resolve({fileMd5: md5});
})

```

### 环比提升（因系统环境，可能存在差异，仅供参考）

![](https://issuecdn.baidupcs.com/issue/netdisk/ts_ad/help/1608003734.png)
