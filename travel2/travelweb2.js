
//Header
let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#login-close');

window.onscroll =() =>{
    searchBtn.classList.remove('fa-x');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-x')
    navbar.classList.toggle('active')
});

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-x')
    searchBar.classList.toggle('active')
});

formBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active')
});
formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active')
});


