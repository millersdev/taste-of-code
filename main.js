

function renderArticles(item) {
    var article = document.createElement("article");

    var heading = document.createElement("h2");
    var paragraph = document.createElement("p");

    heading.textContent = item.title;
    paragraph.textContent = item.text;

    article.appendChild(heading);
    article.appendChild(paragraph);

    var targetLocation = document.getElementsByClassName('posts')[0];
    targetLocation.appendChild(article)

}

document.addEventListener("DOMContentLoaded", function (event) {
    easyFetch().then(function (response) {
        if (response) {
            Object.values(response).forEach(function (item) {
                renderArticles(item)
            })
        }
    })

    var form = document.getElementById('new-article');
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var title = evt.target[0].value;
        var text = evt.target[1].value;
        easyPost(title, text)
    })

})


