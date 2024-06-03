var xhr = new XNLHttpRequest();
var url = "./health.json";

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.responseType.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
    });
};

xhr.send();