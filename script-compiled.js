'use strict';

var haus = document.createElement('h1');
haus.setAttribute('class', 'h1');
var text = document.createTextNode('Myndbandaleigan');
haus.appendChild(text);
document.body.appendChild(haus);

var form;
function makeForm() {
  form = document.createElement('form');
  form.setAttribute('class', 'form');
  document.body.appendChild(form);
}

var url = 'videos.json';

var request = new XMLHttpRequest();
var data;
request.open('GET', url, true);
request.onload = function () {
  data = JSON.parse(request.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data);

    showHead(data.categories[0]);
    makeForm();

    showData(data.videos[0]);
    showData1(data.videos[1]);

    showHead(data.categories[1]);
    makeForm();
    showData(data.videos[0]);
    showData2(data.videos[2]);
    showData3(data.videos[3]);

    showHead(data.categories[2]);
    makeForm();
    showData1(data.videos[1]);
    showData3(data.videos[3]);
    showData2(data.videos[2]);
  } else {
    console.log('Villa kom upp: ' + data.error);
  }
};

request.onerror = function () {
  console.log('villa');
};

request.send();

function showHead(data) {

  var kall = data.title;
  var p2 = document.createElement('h1');
  p2.setAttribute('class', 'h2');
  var text = document.createTextNode(kall);
  p2.appendChild(text);
  document.body.appendChild(p2);
}

function showData(data) {

  var div = document.createElement('div');
  div.setAttribute('class', 'kassi');
  form.appendChild(div);

  var img = new Image();
  img.src = data.poster;
  var link = 'https://notendur.hi.is/vpv1/stort2/1.html';

  var titl = data.title;

  var box = document.createElement('a');
  box.setAttribute('href', link);
  box.appendChild(img);
  div.appendChild(box);

  var nafn = document.createElement('p');
  var nafnid = document.createTextNode(titl);
  nafn.appendChild(nafnid);
  div.appendChild(nafn);
}
function showData1(data) {

  var div = document.createElement('div');
  div.setAttribute('class', 'kassi');
  form.appendChild(div);

  var img = new Image();
  img.src = data.poster;
  var link = 'https://notendur.hi.is/vpv1/stort2/2.html';

  var titl = data.title;

  var box = document.createElement('a');
  box.setAttribute('href', link);
  box.appendChild(img);
  div.appendChild(box);

  var nafn = document.createElement('p');
  var nafnid = document.createTextNode(titl);
  nafn.appendChild(nafnid);
  div.appendChild(nafn);
}
function showData2(data) {

  var div = document.createElement('div');
  div.setAttribute('class', 'kassi');
  form.appendChild(div);

  var img = new Image();
  img.src = data.poster;
  var link = 'https://notendur.hi.is/vpv1/stort2/3.html';

  var titl = data.title;

  var box = document.createElement('a');
  box.setAttribute('href', link);
  box.appendChild(img);
  div.appendChild(box);

  var nafn = document.createElement('p');
  var nafnid = document.createTextNode(titl);
  nafn.appendChild(nafnid);
  div.appendChild(nafn);
}
function showData3(data) {

  var div = document.createElement('div');
  div.setAttribute('class', 'kassi');
  form.appendChild(div);

  var img = new Image();
  img.src = data.poster;
  var link = 'https://notendur.hi.is/vpv1/stort2/4.html';

  var titl = data.title;

  var box = document.createElement('a');
  box.setAttribute('href', link);
  box.appendChild(img);
  div.appendChild(box);

  var nafn = document.createElement('p');
  var nafnid = document.createTextNode(titl);
  nafn.appendChild(nafnid);
  div.appendChild(nafn);
}

var element = document.querySelector('a');
element.addEventListener('click', function () {});

//# sourceMappingURL=script-compiled.js.map