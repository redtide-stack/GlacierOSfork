// This file overwrites the stock zz config.js

self.__zz$config = {
    prefix: "/zz2/service/",
    bare: "/bare2/",
    encodeUrl: zz.codec.xor.encode,
    decodeUrl: zz.codec.xor.decode,
    handler: "/zz2/zz.handler.js",
    client: "/zz2/zz.client.js",
    bundle: "/zz2/zz.bundle.js",
    config: "/zz2/zz.config.js",
    sw: "/zz2/zz.sw.js",
};
