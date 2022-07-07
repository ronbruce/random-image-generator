import './style.css';

fetch('https://picsum.photos/200/300')
  .then(response => response.json())
  .then(data => console.log(data));

document.querySelector('#app').innerHTML = `
  <h1>Random Image Generator</h1>
  <a href="https://picsum.photos/200/300" target="_blank">Click Here</a>
`
