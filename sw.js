self.addEventListener('statechange', function(event) {
  console.log('statechange: ' + event);
});

self.addEventListener('updatefound', function(event) {
  console.log('updatefound: '+event);
});

self.addEventListener('controllerchange', function(event) {
  console.log('controllerchange: '+event);
});

self.addEventListener('error', function(event) {
  console.log('error: '+event);
});

self.addEventListener('message', function(event) {
  console.log('message: '+event);
});

self.addEventListener('install', function(event) {
  console.log('install: '+event);
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

self.addEventListener('activate', function(event) {
  console.log('activate: ' + event);
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
  console.log('fetch: '+event);
});

self.addEventListener('notificationclick', function(event) {
  console.log('notificationclick: '+event);
});

self.addEventListener('notificationclose', function(event) {
  console.log('notificationclose: '+event);
});
