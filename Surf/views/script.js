
    if (window.location.pathname === "/")
        loadHome();
    if (window.location.pathname === "/produit.html") {
        loadXProducts();
    }


//fet produits

function loadXProducts() {
    let request = new XMLHttpRequest();
    request.open("GET", "/api/produits/", true);
    request.onload = function () {
        if (this.status == 200) {
            let prod = JSON.parse(this.responseText);
            document.getElementById("ProdName").innerHTML = prod.price;
        }
    }
    request.send(); 
}

// get data JSON products
function loadHome() {
    let request = new XMLHttpRequest();
    request.open("GET", "/api/produits");
    request.onload = function () {
        if (this.status == 200) {
            document.getElementById("xProducts").innerHTML = "";
            let xProuduits = JSON.parse(this.responseText);
            for (let p in xProuduits) {
                let prod = "";
                prod += "<div class='col-md-4'><div class='thumbnail' >";
                prod += "<img src='" + xProuduits[p].image +"' width='300'>";
                prod += "<div><h5>" + xProuduits[p].name + "</h5>";
                prod += "<p>" + xProuduits[p].discription + "</p>";
                // prod += '<a href="/department/?entId=' + id + '&depId=' + xProuduits[p].id + '">plus de info <i class="fa fa-chevron-right" style="font-size:20px;"></i></a>"'
                prod += `</div><a href="produit.html" ><button (${xProuduits[p].id})"  type="button" class="btn btn-success" style="border-radius: 8px; font-size: 1.1em; color: white;">Request Now</button></a></div></div></div>`;
                document.getElementById("xProducts").innerHTML += prod;
            }
        }
    };
    request.send();
}
