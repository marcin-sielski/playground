self.addEventListener('statechange', function(event) {

});

self.addEventListener('updatefound', function(event) {

});

self.addEventListener('controllerchange', function(event) {

});

self.addEventListener('error', function(event) {

});

self.addEventListener('message', function(event) {

});

self.addEventListener('install', function(event) {

});

self.addEventListener('activate', function(event) {
  var title = 'Yay a message.';
  var body = 'We have received a push message.';
  var tag = 'simple-push-demo-notification-tag';
  var data = {
    doge: {
        wow: 'such amaze notification data'
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      tag: tag,
      data: data
    })
  );
});

self.addEventListener('fetch', function(event) {

});

self.addEventListener('notoficationclick', function(event) {

});

self.addEventListener('notoficationclose', function(event) {

});
