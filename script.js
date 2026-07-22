// DARK MODE


const btn = document.getElementById("theme-btn");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀️";
    } else {
        btn.innerText = "🌙";
    }
});


//MENI HAMBURGER (LOUVRI / FÈMEN)


const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// LANG


const langToggle = document.getElementById("langToggle");
const langMenu = document.querySelector(".menu");

const searchInput = document.getElementById("searchInput");
const tit = document.getElementById("tit");
const soustit = document.getElementById("soustit");


const analyseTitre = document.getElementById("analyse-titre");
const analyseText = document.getElementById("analyse-text");

langToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    langMenu.classList.toggle("show");
});

document.addEventListener("click", function () {
    langMenu.classList.remove("show");
});


// TRADIKSYON


function chwaziLang(lang) {

    langMenu.classList.remove("show");

    if (lang === "fr") {
        tit.innerText = "Bienvenue sur PowerMusic";
        soustit.innerText = "La meilleure plateforme pour écouter vos titres préférés.";
        searchInput.placeholder = "Chercher une musique...";
        langToggle.innerText = "Langue";
        
        // --- KORÈKSYON 2: Sèvi ak nouvo varyab yo epi mete tèks la sou yon sèl liy ---
        analyseTitre.innerText = "Analyser la playlist";
        analyseText.innerText = "Découvrez des informations sur votre playlist, le nombre de titres, les genres musicaux et d'autres détails qui peuvent vous aider à mieux organiser votre musique.";
    }    
    else if (lang === "en") {
        tit.innerText = "Welcome to PowerMusic";
        soustit.innerText = "The best platform to listen to your favorite tracks.";
        searchInput.placeholder = "Search for a song...";
        langToggle.innerText = "Language";

        // Ajoute tradiksyon angle a tou pou l pa rete an kreyòl
        analyseTitre.innerText = "Analyze Playlist";
        analyseText.innerText = "Discover information about your playlist, track count, music genres, and other details to help you better organize your music.";
    }

    else if (lang === "pt") {
        tit.innerText = "Bem-vindo ao PowerMusic";
        soustit.innerText = "A melhor plataforma para ouvir suas músicas favoritas.";
        searchInput.placeholder = "Pesquisar uma música...";
        langToggle.innerText = "Idioma";

        analyseTitre.innerText = "Analisar Playlist";
        analyseText.innerText = "Descubra informações sobre sua playlist, número de músicas, gêneros musicais e outros detalhes para ajudar a organizar melhor suas músicas.";
    }

    else if (lang === "es") {
        tit.innerText = "Bienvenido a PowerMusic";
        soustit.innerText = "La mejor plataforma para escuchar tus canciones favoritas.";
        searchInput.placeholder = "Buscar una canción...";
        langToggle.innerText = "Idioma";

        analyseTitre.innerText = "Analizar la Playlist";
        analyseText.innerText = "Descubre información sobre tu playlist, cantidad de canciones, géneros musicales y otros detalles que te ayudarán a organizar mejor tu música.";
    }

    else if (lang === "ht") {
        tit.innerText = "Byenveni sou PowerMusic";
        soustit.innerText = "Pi bon platfòm pou koute mizik ou renmen yo.";
        searchInput.placeholder = "Chache yon mizik...";
        langToggle.innerText = "Lang";

        analyseTitre.innerText = "Analize Playlist la";
        analyseText.innerText = "Dekouvri enfòmasyon sou playlist ou a, kantite mizik, estil mizikal yo, ak lòt detay ki ka ede w pi byen òganize mizik ou yo.";
    }

}