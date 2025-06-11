
const sections = document.querySelectorAll('section');
const linksNav = document.querySelectorAll('.navigation a');
const header  = document.querySelector('header');
const btnHome = document.querySelector('.btn-home');
const menuIcon = document.querySelector('#MENU');
const nav = document.querySelector('.navigation');


const MenuActive = ()=> {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}



const scrollActive = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) {
            linksNav.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`nav a[href*=${id}]`).classList.add('active');
            })
        }
    })
    header.classList.toggle('sticky', window.scrollY > 100);
    btnHome.classList.toggle('btnDisplay', window.scrollY > 150);
    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');
}

ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200

});



ScrollReveal().reveal('.home-content, .section-title', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact form, .p3', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .p1, .p2', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



const mission = new Typed('.multiple', {
    strings: ['Web Developer/Control-Command Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

const role = new Typed('.p1', {
    strings: ["Bringing your projects to life is what drives me - I'd be delighted to help you make them a reality"],
    typeSpeed: 50,
    backDelay: 500,
    loop: false
  });

  

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            //.addIndicators()
            .addTo(controller)

        }

    }

})

menuIcon.addEventListener('click',MenuActive);
window.addEventListener('scroll', scrollActive);
