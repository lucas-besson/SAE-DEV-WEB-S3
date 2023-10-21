const btn = document.querySelector('.btnhaut');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})
/*
function ouvrirPage() {
    var a = document.getElementById("search").value;

    if (a === "home" || a === "ch*" || a === "chien") {
        window.open("index.html");
    }

    else if (a === "Plougonven") {
        window.open("commune.html");
    }

    else if (a === "lieu*") {
        window.open("Ltouristique.html");
    }
    else if (a === "youtube") {
        window.open("Service en ligne.html");
    }


}*/
function ouvrirPage() {
    var a = document.getElementById("search").value.toLowerCase().replace(/\s+/g, "");

    if (a === "home" || a === "ch*" || a === "fdds") {
        window.open("index.html");
    }

    else if (a === "plougonven") {
        window.open("commune.html");
    }

    else if (a === "lieu*") {
        window.open("Ltouristique.html");
    }
    else if (a === "youtube") {
        window.open("Service en ligne.html");
    }
    else {
        // Rediriger vers une page par défaut si aucune correspondance n'est trouvée
        window.open("erreur.html");
    }
}

