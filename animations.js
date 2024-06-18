document.addEventListener('DOMContentLoaded', () => {
    const slideAnimation = document.querySelectorAll('.slide');
    const headerAnimation = document.querySelectorAll('#block-head');

    const SlideObserverOptions = {
        root: null, // par défaut, la fenêtre du navigateur
        rootMargin: '0px',
        threshold: 0.9// déclenchement quand 60% de l'élément est visible
    };

    const heObserverOptions = {
        root: null, // par défaut, la fenêtre du navigateur
        rootMargin: '0px',
        threshold: 0// déclenchement quand 60% de l'élément est visible
    };

    //observer pour slide
    const observerSlide = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, SlideObserverOptions);

    //observer pour head
    const observerHead = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, heObserverOptions);

    slideAnimation.forEach(element => {
        observerSlide.observe(element);
    });

    headerAnimation.forEach(element => {
        observerHead.observe(element);
    });


});
