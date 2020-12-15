## 基于WASM计算文件md5的工具
> 使用WebAssembly计算string或者ArrayBuffer的hash值，可以快速计算文件的md5值.

### 使用方式

1. npm安装

```
"wasm-hash": "git+ssh://git@github.com:xujie-phper/wasm-hash.git#v1.0.0"
```

2. 项目使用

```

import Hash from 'wasm-hash';

const hash = new Hash('md5');
const md5 = hash.update(arrayBuffer).toString();


//或者

arrayBuffers.forEach((arrayBuffer) => {
    hash.update(arrayBuffer)
});

const md5 = hash.toString();

```

### 环比提升

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c14ed392519648ce8d2bbc75a9da1a73~tplv-k3u1fbpfcp-watermark.image)
