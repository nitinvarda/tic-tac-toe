export default function serviceWorker() {

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
            navigator.serviceWorker.register(swUrl).then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }

}