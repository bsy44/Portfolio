/* MENU MOBILE */

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });

    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
            header.classList.add('hide-nav');
            setTimeout(() => {
                header.classList.remove('hide-nav');
            }, 500); // Correspond à la durée de transition définie en CSS (0.5s)
        });
    });
}
menuMobile();

/* PORTFOLIO */


/* EFFET */
function animationPage(){
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        section.style.opacity = "0.5";
        section.style.transition = "all 1.6s";
      });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
        }
    });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

animationPage();

function showProjet(){
    const links = document.querySelector('card-link');
    const modals = document.querySelector('.modal');

    links.forEach(link => {
        link.addEventListener('click', (Event)=> {
            Event.preventDefault();
            document.querySelector(`[id=${link.databaset.id}]`).classList.add('show');
        });
    });
}