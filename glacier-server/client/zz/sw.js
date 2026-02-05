importScripts('../epoxy/index.js');
importScripts('zz.bundle.js');
importScripts('zz.config.js');
importScripts(__zz$config.sw || 'zz.sw.js');

const zz = new zzServiceWorker();

self.addEventListener('fetch', event => {
    event.respondWith(
        (async ()=>{
            if(zz.route(event)) {
                return await zz.fetch(event);
            }
            return await fetch(event.request);
        })()
    );
});