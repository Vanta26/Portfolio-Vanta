const buttonOpenMenu = document.querySelector('.menu-open');
const buttonCloseMenu = document.querySelector('.menu-close');
const menuResponsive = document.querySelector('.menu-responsive-container');
const menuLinks = document.querySelectorAll('.menu-responsive__link');


function openMenu() {
    menuResponsive.style.left = '0';
    buttonOpenMenu.style.display = 'none';
    buttonCloseMenu.style.display = 'block';
    if (menuResponsive.style.display= 'none') {
        menuResponsive.style.display= 'block'
    }
}

function closeMenu() {
    menuResponsive.style.left = '-100%';
    buttonOpenMenu.style.display = 'block';
    buttonCloseMenu.style.display = 'none';
}

buttonOpenMenu.onclick = openMenu;
buttonCloseMenu.onclick = closeMenu;

function irEnlace() {
    menuResponsive.style.left = '-100%';
    buttonCloseMenu.style.display = 'none';
    buttonOpenMenu.style.display = 'block';
}

menuLinks.forEach( function(link) {
    link.onclick = irEnlace;
})

