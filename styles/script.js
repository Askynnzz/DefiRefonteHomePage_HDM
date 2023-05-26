var slides = document.getElementsByClassName("slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000); // Change de slide toutes les 5 secondes

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

// Arrêter l'intervalle lors du clic sur une miniature
function stopSlideInterval() {
  clearInterval(slideInterval);
}

// Récupérer les miniatures
var thumbnails = document.querySelectorAll('.thumbnail');

// Ajouter un gestionnaire d'événement au clic sur les miniatures
Array.from(thumbnails).forEach(function(thumbnail, index) {
  thumbnail.addEventListener('click', function() {
    stopSlideInterval(); // Arrêter l'intervalle automatique
    goToSlide(index);
  });
});

// Fonction pour passer à une diapositive spécifique
function goToSlide(slideIndex) {
  slides[currentSlide].classList.remove('active');
  thumbnails[currentSlide].classList.remove('active');
  slides[slideIndex].classList.add('active');
  thumbnails[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}

// Appeler la fonction goToSlide avec l'index initial (0 pour la première diapositive)
goToSlide(0);

// Redémarrer l'intervalle du carousel après 3 secondes
setTimeout(function() {
  slideInterval = setInterval(nextSlide, 5000);
}, 3000);

// Gestion du scroll
var sectionHDM = document.getElementById('hdm-network');
var animationStarted = false;

function isElementVisible(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var threshold = 0.12; // Au moins 12% de visibilité
  return rect.top <= windowHeight * (1 - threshold);
}

function handleScroll() {
  if (isElementVisible(sectionHDM) && !animationStarted) {
    sectionHDM.classList.add('show');
    animationStarted = true;
  } else if (!isElementVisible(sectionHDM) && animationStarted) {
    sectionHDM.classList.remove('show');
    animationStarted = false;
  }

  Array.from(slides).forEach(function(slide) {
    if (isElementVisible(slide)) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('expanded');
  });
});

// Sélectionnez l'élément de l'icône de langue
const languageToggle = document.querySelector('.language-toggle');

// Sélectionnez le menu déroulant
const dropdownMenu = document.querySelector('.dropdown-menu');

// Ajoutez un gestionnaire d'événements pour le clic sur l'icône de langue
languageToggle.addEventListener('click', function() {
  // Basculez la classe 'show' sur le menu déroulant pour afficher ou masquer le menu
  dropdownMenu.classList.toggle('show');
});





window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
