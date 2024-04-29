AOS.init();


let mask = document.querySelector('.mask')
window.addEventListener('load', () => {
    mask.classList.add('.loader_hide')
    setTimeout(() => {
        mask.remove()
    }, 4000)
});
