const cacheData = 'appv2';
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {
            console.log("adding Cache...")
            return cache.addAll([
                '/static/js/2.e2766815.chunk.js',
                '/static/js/main.5a20eb76.chunk.js',
                '/',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'

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