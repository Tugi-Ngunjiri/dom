// let cards = document.querySelectorAll('.card');
// console.log(cards);

// Get single elements from the DOM
// document.querySelector('any-css-selector')
// document.getElementById('id-name')

//Get multiple elements from the DOM
// document.querySelectorAll('any-css-selector')
// document.getElementsByClassName('class-name')
// document.getElementsByTagName('tag-name')

document.addEventListener("DOMContentLoaded", () => {
  let baseURL = "https://placeimg.com/640/480/tech";
  let apiKey = "a6702f9745414dbdb2031e3fd6930800";
 
  let articleTitle = document.querySelector(".card-title");
  let author = document.querySelector('h6');
  let Description = document.querySelector("h7")
  let source = document.querySelector("h8")
  let published = document.querySelector("h9")

  fetch(baseURL + '/v2/top-headlines?category=technology&language=en&apiKey=' + apiKey)
    .then(response => response.json())
    .then(data => {
      console.log(data.articles[0]);
      articleTitle.textContent = data.articles[0].title;
      author.textContent = data.articles[0].author;
    });

  
   
});

