// Attente que le document HTML soit entièrement chargé et analysé
document.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments nécessaires dans le DOM
  const arrowLeft = document.querySelector(".arrow_left"); // Flèche gauche
  const arrowRight = document.querySelector(".arrow_right"); // Flèche droite
  const imgBanner = document.querySelector(".banner-img"); // Image de la bannière
  const paraBanner = document.querySelector("#banner p"); // Texte de la bannière
  const dotContainer = document.querySelector(".dots"); // Conteneur des points de navigation
  console.log("{dotContainer}", { dotContainer });

  // Tableau des données des diapositives
  const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  let index = 0; // Index actuel de la diapositive affichée

  // Fonction pour mettre à jour l'image et le texte de la bannière
  const updateBannerAndDot = () => {
    imgBanner.src = `./assets/images/slideshow/${slides[index].image}`; // Mise à jour de l'image
    console.log("imgBanner.src", imgBanner.src);
    paraBanner.innerHTML = slides[index].tagLine; // Mise à jour du texte
    updateDots(); // Mise à jour des points de navigation
  };

  // Fonction pour mettre à jour les points de navigation
  const updateDots = () => {
    Array.from(dotContainer.children).forEach((dot, i) => {
      dot.classList.toggle("dot_selected", i === index); // Change la classe en fonction de l'index
    });
  };

  // Fonction pour initialiser les points de navigation
  const initDots = () => {
    slides.forEach((slide, i) => {
      const dot = document.createElement("span"); // Création d'un point de navigation
      dot.className = "dot";
      dot.addEventListener("click", () => {
        index = i; // Mise à jour de l'index au clic
        updateBannerAndDot(); // Mise à jour de la bannière
      });
      dotContainer.appendChild(dot); // Ajout du point au conteneur
    });
    updateDots(); // Mise à jour initiale des points
  };

  // Ajout des gestionnaires d'événements sur les flèches de navigation
  arrowLeft.addEventListener("click", () => {
    index = index > 0 ? index - 1 : slides.length - 1; // Décrémente l'index ou revient à la fin si nécessaire
    updateBannerAndDot(); // Mise à jour de la bannière
  });

  arrowRight.addEventListener("click", () => {
    index = index < slides.length - 1 ? index + 1 : 0; // Incrémente l'index ou revient au début si nécessaire
    updateBannerAndDot(); // Mise à jour de la bannière
  });

  initDots(); // Initialise les points de navigation
  updateBannerAndDot(); // Mise à jour initiale de la bannière
});
