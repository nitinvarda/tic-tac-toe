const cacheData = 'appv2';
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {
            console.log("adding Cache...")
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js ',
                '/',
                '/home',
                '/index.html'
            ])
        })
            .catch(err => (
                console.log(err)
            ))
    )
})


// activated service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activated')

})



self.addEventListener('fetch', (event) => {

    console.log('event triggered')
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