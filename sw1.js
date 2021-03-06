self.addEventListener('statechange', function(event) {
  console.log('statechange: ' + JSON.stringify(event));
});

self.addEventListener('updatefound', function(event) {
  console.log('updatefound: '+JSON.stringify(event));
});

self.addEventListener('controllerchange', function(event) {
  console.log('controllerchange: '+JSON.stringify(event));
});

self.addEventListener('error', function(event) {
  console.log('error: '+JSON.stringify(event));
});

self.addEventListener('message', function(event) {
  console.log('message: '+JSON.stringify(event));
});

self.addEventListener('install', function(event) {
  console.log('install: '+JSON.stringify(event));
});

self.addEventListener('activate', function(event) {
  console.log('activate: ' + JSON.stringify(event));
});

self.addEventListener('fetch', function(event) {
  console.log('fetch: '+JSON.stringify(event));
  dweetio.get_latest_dweet_for('25935C0E2C7F42558309E27E216C1D65', function(error, dweet) {
        if (error) return;
    dweet = dweet[0];
    console.log(dweet);
  });
});

self.addEventListener('notificationclick', function(event) {
  console.log('notificationclick: '+JSON.stringify(event));
});

self.addEventListener('notificationclose', function(event) {
  console.log('notificationclose: '+JSON.stringify(event));
});
