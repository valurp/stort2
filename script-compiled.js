var request = new XMLHttpRequest();

request.open('GET', 'videos.json', true);
request.onload = function () {
  var data = JSON.parse(request.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data);
  } else {
    console.log('Villa kom upp: ' + data.error);
  }
};

request.onerror = function () {
  console.log('Óþekkt villa');
};

request.send();

//# sourceMappingURL=script-compiled.js.map