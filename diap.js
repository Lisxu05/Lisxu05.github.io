// Ceci est une fonction auto - exécutable.Les fonctions auto - exécutables
// sont des fonctions qui s'exécutent immédiatement après leur déclaration,
// sans avoir besoin d'être appelées.Les accolades immédiatement après la 
// déclaration de la fonction et les parenthèses à la fin de la déclaration 
// définissent la fonction et permettent de l'exécuter immédiatement.
(function () {
    // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
    // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
    "use stict"
    // Récupère les boutons de navigation
    const next = document.querySelector('#next');
    // Récupère tous les éléments de type "slide"
    const $slides = document.querySelectorAll('.slide');
    // Initialisation du slide courant à 1
    let currentSlide = 1;
    // Fonction pour afficher un slide spécifique en utilisant un index
    // Fonction pour attendre
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    
    function slideTo(index) {
        // Vérifie si l'index est valide (compris entre 0 et le nombre de slides - 1)
        currentSlide = index >= $slides.length || index < 1 ? 0 : index;
        if (index === 2) {
            next.textContent = '►';
            next.style.right = '1%';  // Applique le style pour right
            next.style.left = 'initial';  // Réinitialise le style pour left
        } else {
            next.textContent = '◄';
            next.style.left = '1%';  // Applique le style pour left
            next.style.right = 'initial';  // Réinitialise le style pour right
        }
        

        // Boucle sur tous les éléments de type "slide" pour les déplacer
        $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
        
    }
    // Fonction pour afficher le prochain slide
    function showSlide() {
        slideTo(currentSlide);
        currentSlide++;
    }
        

    function updateNextButton() {
        // Met à jour le texte du bouton en fonction de l'index du slide
        next.textContent = currentSlide === 1? '>' : '<';
    }

    // Ajout d'un écouteur d'événement "click" sur le bouton "next" pour afficher le slide suivant
    next.addEventListener('click', () => slideTo(++currentSlide))
    
})()