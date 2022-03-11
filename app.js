document.getElementById('btn').addEventListener('click', () => {

    var xhr = new XMLHttpRequest();
    var url = document.getElementById('link').value;
    xhr.open("GET", url, true);
    xhr.responseType = "document";
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('answer').innerText = " Scraping is allowed ";
            console.clear();

        } else {
            console.log("not workng");

            xhr.send();
        }
    }
    xhr.send();

    if (xhr.readyState != 4 && xhr.status != 200) {
        document.getElementById('answer').innerText = " Scraping is not allowed ";
        console.clear();
    }
})
document.getElementById('link').addEventListener('click', () => {
    document.getElementById('answer').innerText = " ";
})