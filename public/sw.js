const cacheData = 'appv1';
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {
            console.log("adding Cache...")
            cache.addAll([
                './static/js/main.chunk.js',
                './static/js/0.chunk.js',
                './static/js/bundle.js ',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
                'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
                './',
                './index.html'
            ])
        })
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