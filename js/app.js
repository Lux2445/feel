
AOS.init();


//срабатывание бургера только в случае полной прогрузки сайта
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
    })
})

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".header").classList.remove("open")
    }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".header").classList.remove("open")
});

//загрузка сайт
let mask = document.querySelector('.mask')
window.addEventListener('load', () => {
    mask.classList.add('.loader_hide')
    setTimeout(() => {
        mask.remove()
    }, 1000)
});

// кнопка вверх
const topBtn = document.querySelector('.top__parent');
window.addEventListener('scroll', () => {
    if (window.pageYOffset>500) {
        // topBtn.classList.add('add');
        topBtn.classList.add('bounce-in-top');
    } else {
        // topBtn.classList.remove('add');
        topBtn.classList.remove('bounce-in-top');
    }
})