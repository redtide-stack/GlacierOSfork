var V86Inject = `*:not(#screen_container, #screen_container *, html, body) {
    display: none !important;
}
html, body {
    font-size: 0;
}
#screen_container {
    width: 100vw;
    display: flex !important;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
}`;

self.__zz$config = {
  prefix: "/zz/service/",
  encodeUrl: zz.codec.xor.encode,
  decodeUrl: zz.codec.xor.decode,
  handler: "/zz/zz.handler.js",
  client: "/zz/zz.client.js",
  bundle: "/zz/zz.bundle.js",
  config: "/zz/zz.config.js",
  sw: "/zz/zz.sw.js",
  inject: [
    { 
      "host": "/^https:\/\/copy\.sh\/v86\/\?/",
      "injectTo": "head",
      "html": "<style>"+V86Inject+"</style>"
    },
  ]
};
