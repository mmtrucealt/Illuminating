self.__uv$config = {
    prefix: '/gt/',
    bare: '/jy/',
    encodeUrl: function(url) {
        return btoa(url); // encode
    },
    decodeUrl: function(encodedUrl) {
        return atob(encodedUrl); // decode
    },
    handler: '/assets/uv.handler.js',
    bundle: '/assets/uv.bundle.js',
    config: '/assets/uv.config.js',
    sw: '/assets/uv.sw.js',
};
