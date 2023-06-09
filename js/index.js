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
    let baseURL = "https://newsapi.org";
    let apiKey = "a6702f9745414dbdb2031e3fd6930800";
   
    let recentNewsContent = document.querySelector('#recent-news-content');
  
    fetch(baseURL + '/v2/top-headlines?category=technology&language=en&apiKey=' + apiKey)
      .then(response => response.json())
      .then(data => {
        const articles = data.articles;
        console.log(articles); // An array of articles
  
        articles.forEach(article => {
          let articleCard = document.createElement('div');
          articleCard.classList.add("col-md-3");
          articleCard.innerHTML = ` <div class="card mb-4" style="width: 18rem;">
                                      <img src=${article.urlToImage} class="card-img-top" alt="">
                                      <div class="card-body">
                                        <h5 class="card-title">${article.title}</h5>
                                        <h6>${article.author}</h6>
                                        <p class="card-text">${article.description}</p>
                                      </div>
                                    </div>`
          recentNewsContent.appendChild(articleCard);
        });
      });
  });