var request = new XMLHttpRequest();

request.open('GET', "https://hplussport.com/api/products?qty=2&order=name");

request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);
    //console.log(parsedData);

  
    for (var i = 0; i < parsedData.length; i++) {
        var name = parsedData[i].name;
        var products = document.createElement('li');
        var image = document.createElement('img');
        image.setAttribute("src", parsedData[i].image)
        products.innerText = name;
        document.body.appendChild(products);
        document.body.appendChild(image);
    }

}
request.send();
