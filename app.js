const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const navbar = document.querySelector('.navbar__list')


// Abrir o menu
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open-close')
})

// Fechar o menu
close.addEventListener('click', () => {
    navbar.classList.toggle('open-close')
})