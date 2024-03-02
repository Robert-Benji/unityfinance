const hamMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav');

const toggleHamMenu = () => {
    hamMenu.addEventListener('click', () => {
        navMenu.classList.toggle('nav-show');

        const rotateHamMenu = () => {
            hamMenu.classList.toggle('rotate');
        }
        rotateHamMenu();
    })
}
toggleHamMenu();





// BACK TO TOP BUTTON

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    // console.log(`scrollPos is  ${scrollPosition}`)
    if (scrollPosition > 1000) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
})


backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: -1000,
        behavior: 'smooth'
    });
})





// FOOTER YEAR

const yearPlaceholder = document.getElementById('year');

let date = new Date();
let year = date.getFullYear();
yearPlaceholder.innerText = year;






document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.code == 73) {
        e.preventDefault();
        alert('Right-clicking and using the "Ctrl + Shift + I" key combination are not allowed on this website.');
    }
}, false);