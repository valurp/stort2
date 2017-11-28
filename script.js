const haus = document.createElement('h1');
haus.setAttribute('class', 'h1');
const text = document.createTextNode('Myndbandaleigan');
haus.appendChild(text);
document.body.appendChild(haus);

const form;
function makeForm() {
  form = document.createElement('form');
  form.setAttribute('class', 'form');
  document.body.appendChild(form);
}

const url = 'videos.json';

const request = new XMLHttpRequest();
const data;
request.open('GET', url, true);
request.onload = function() {
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
}

request.onerror = function() {
  console.log('villa');
};

request.send();


function showHead(data) {

  const kall = data.title;
  const p2 = document.createElement('h1');
  p2.setAttribute('class', 'h2');
  const text = document.createTextNode(kall);
  p2.appendChild(text);
  document.body.appendChild(p2);

}

function showData(data) {
  
  const div = document.createElement('div');
  div.setAttribute('class', 'kassi');
  form.appendChild(div);
  

  const img = new Image();
  img.src = data.poster;
  const link = 'https://notendur.hi.is/vpv1/stort2/1.html';

  const titl = data.title;

  const box = document.createElement('a');
  box.setAttribute('href', link);
  box.appendChild(img);
  div.appendChild(box);

  const nafn = document.createElement('p');
  const nafnid = document.createTextNode(titl);
  nafn.appendChild(nafnid);
  div.appendChild(nafn);


}
function showData1(data) {
  
  const div = document.createElement('div');
  div.setAttribute('class', 'kassi');
  form.appendChild(div);
  

  const img = new Image();
  img.src = data.poster;
  const link = 'https://notendur.hi.is/vpv1/stort2/2.html';

  const titl = data.title;

  const box = document.createElement('a');
  box.setAttribute('href', link);
  box.appendChild(img);
  div.appendChild(box);

  const nafn = document.createElement('p');
  const nafnid = document.createTextNode(titl);
  nafn.appendChild(nafnid);
  div.appendChild(nafn);


}
function showData2(data) {
  
  const div = document.createElement('div');
  div.setAttribute('class', 'kassi');
  form.appendChild(div);
  

  const img = new Image();
  img.src = data.poster;
  const link = 'https://notendur.hi.is/vpv1/stort2/3.html';

  const titl = data.title;

  const box = document.createElement('a');
  box.setAttribute('href', link);
  box.appendChild(img);
  div.appendChild(box);

  const nafn = document.createElement('p');
  const nafnid = document.createTextNode(titl);
  nafn.appendChild(nafnid);
  div.appendChild(nafn);


}
function showData3(data) {
  
  const div = document.createElement('div');
  div.setAttribute('class', 'kassi');
  form.appendChild(div);
  

  const img = new Image();
  img.src = data.poster;
  const link = 'https://notendur.hi.is/vpv1/stort2/4.html';

  const titl = data.title;

  const box = document.createElement('a');
  box.setAttribute('href', link);
  box.appendChild(img);
  div.appendChild(box);

  const nafn = document.createElement('p');
  const nafnid = document.createTextNode(titl);
  nafn.appendChild(nafnid);
  div.appendChild(nafn);


}



const element = document.querySelector('a');
element.addEventListener('click', function() {
 
});






