const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon')

iconToggle.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () =>{
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLinks) =>{
    menuLinks.addEventListener('click', () =>{
        navbarMenu.classList.remove('active');
    })
})

//change background header
function scrollHeader(){
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

// Hero Type effect*-
document.addEventListener('DOMContentLoaded', function () {
    const typedElement = document.querySelector('.typed');

    if (typedElement) {
        let typed_strings = typedElement.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');

        new Typed('.typed', {
            strings: typed_strings,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
        });
    }
});


//Scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        } else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive);

//Resume Section active link

const pages = document.querySelectorAll('.page');
const resumeTabs = document.querySelectorAll('.resume_tabs a');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop;
        const sectionId = page.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            resumeTabs.forEach(tab => {
                tab.classList.remove('current');
                if (tab.getAttribute('href') === '#' + sectionId) {
                    tab.classList.add('current');
                }
            });
        }
    });
}

window.addEventListener('scroll', resumeActive);


//Services

let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll('.services_modal'),
    modalClose = document.querySelectorAll('.modal_close-icon');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach(el => {
    el.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})
   