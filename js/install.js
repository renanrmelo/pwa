
if('serviceWorker' in navigator) {

  navigator.serviceWorker
           .register('sw.js')
           .then(function() { console.log("Service Worker Registered."); });

  navigator.serviceWorker.ready.then(function(registration) {
     console.log('Service Worker Ready.');
  });
}