document.addEventListener("DOMContentLoaded", () => {
   
    let news= document.querySelector('#recent-news-content');
  
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5dccb5ce04e042cab22d4654c5ffadc6')
      .then(response => response.json())
      .then(data => {
        const news = data.news;
        console.log(news); // An array of news
  
        news.forEach(news => {
          let news = document.createElement('div');
          news.classList.add("col-md-3");
          news.innerHTML = ` <div>
          <div class="news-body">
         <h5 class="news-title">${news.title}</h5>
         <h6>Journalist</h6>
        <p class="news-text">Discover latest news</p>          </div>
     </div>`
          news.appendChild(news);
        });
      });
  });