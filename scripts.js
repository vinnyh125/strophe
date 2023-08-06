document.addEventListener("DOMContentLoaded", function() {
    let title = '';
    let author = '';
    let stanzas = '';
    let content = '';

    let titleDiv = document.getElementById("poem-title");
    let authorDiv = document.getElementById("poem-author");
    let contentDiv = document.getElementById("poem-content");

    fetch("https://poetrydb.org/random")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        title = data[0]["title"];
        titleDiv.innerText = title + "\n";
        console.log(title);

        author = data[0]["author"];
        authorDiv.innerText = "By: " + author;
        console.log(author);

        stanzas = data[0]["lines"];
        for (i=0; i < stanzas.length; i++) {
            content += stanzas[i] + "\n";
        }
        contentDiv.innerText = content;
        console.log(content);
    })
});