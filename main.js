import './style.css';

fetch('https://picsum.photos/v2/list?page=2&limit=100')
  .then((res) => res.json())
  .then((listOfPhotos) => {
    const i = Math.floor(Math.random() * 100);

    console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);

    document.querySelector('#app').innerHTML += `
    <h1>${listOfPhotos[i].author}</h1>
    
   
    `


  });

//  src="download_url"


