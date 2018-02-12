self.addEventHandler('statechange', function(event) {

});

self.addEventHandler('updatefound', function(event) {

});

self.addEventHandler('controllerchange', function(event) {

});

self.addEventHandler('error', function(event) {

});

self.addEventHandler('message', function(event) {

});

self.addEventHandler('install', function(event) {

});

self.addEventHandler('activate', function(event) {
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

self.addEventHandler('fetch', function(event) {

});
