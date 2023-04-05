document.addEventListener("DOMContentLoaded", () =>{
    let baseURL = "https://newsapi.org";
    let apiKey = "5dccb5ce04e042cab22d4654c5ffadc6";
   
    let localNewsContent = document.querySelector('#local-news-content');

    // fetch local News data from news Api

   fetch(baseURL + '/v2/top-headlines?country=us&apiKey=' + apiKey)
   .then(response => response.json())
   .then(data => {
      console.log(data.articles);

      data.articles.forEach(article => {
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
      localNewsContent.appendChild(articleCard) ;                             
      });
   });


});
