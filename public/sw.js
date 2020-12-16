const cacheData = 'appv2';
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {

            return cache.addAll([
                '/static/js/2.95473729.chunk.js',
                '/static/js/main.2dabac6a.chunk.js',
                '/',
            ])
                .catch(err => (
                    console.log(err)
                ))
        })
    )
})


// activated service worker
this.addEventListener('activate', evt => {
    console.log('service worker has been activated')

})



this.addEventListener('fetch', (event) => {

    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((res) => {
                if (res) {
                    return res
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }

})