self.addEventListener('statechange', function(event) {
  console.log(event);
});

self.addEventListener('updatefound', function(event) {
  console.log(event);
});

self.addEventListener('controllerchange', function(event) {
  console.log(event);
});

self.addEventListener('error', function(event) {
  console.log(event);
});

self.addEventListener('message', function(event) {
  console.log(event);
});

self.addEventListener('install', function(event) {
  console.log(event);
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
  console.log(event);
});

self.addEventListener('notoficationclick', function(event) {
  console.log(event);
});

self.addEventListener('notoficationclose', function(event) {
  console.log(event);
});
