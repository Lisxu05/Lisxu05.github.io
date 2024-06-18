document.addEventListener('DOMContentLoaded', () => {
    // Sélectionnez le menu de navigation
    const nav = document.querySelector('nav');

    let blockHead = document.getElementById('block-head');// Sélectionnez l'élément
    let blockMain = document.querySelector('main'); // Sélectionnez l'élément

    // Ajoutez un écouteur d'événements pour l'événement de défilement
    window.addEventListener('scroll', () => {

        
        const hauteurBlockHead = blockHead.getBoundingClientRect().top; // Obtenez les dimensions de l'élément
        const hauteurBlockMain = blockMain.getBoundingClientRect().top; // Obtenez les dimensions de l'élément
        // Vérifiez si la position de défilement dépasse la hauteur spécifiée
        if (hauteurBlockMain < 0) {
            // Changez la couleur de fond du menu de navigation
            nav.style.backgroundColor =  "black"; // Exemple de couleur noir
            nav.style.opacity = 1;
        } else if(hauteurBlockHead < 40){
            // Réinitialisez la couleur de fond si la condition n'est pas remplie
            nav.style.backgroundColor = "transparent"; // Retourne à la couleur initiale
            nav.style.opacity = 0;
        } else {
            nav.style.backgroundColor = "transparent"; // Retourne à la couleur initiale
            nav.style.opacity = 1;
        }
    });
});