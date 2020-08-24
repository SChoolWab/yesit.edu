$().ready(function () {
    $('.slick-carousel').slick({
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 1,
        centerMode: true
    });
});


let time = document.querySelector('.time')
let dt = document.querySelector('.date')

let date = new Date()
let timeFull = date.toLocaleTimeString()
let DateFull = date.toLocaleDateString()

time.innerHTML= timeFull
dt.innerHTML = DateFull



// Menu 
let MenuBtn = document.querySelector('.mobileMenu')
let close = document.querySelector('.close')
let MenuOpt = document.querySelector('#mobileMenuOption')
let body = document.querySelector('body');
let check = true;

MenuBtn.addEventListener('click', () => {
    if (check == true) {
        body.classList.add('ForMobile')
        MenuOpt.classList.add('menuActive')
        MenuOpt.style.display = 'block'
        check = false
    } else {
            
        body.classList.remove('ForMobile')
        MenuOpt.classList.remove('menuActive')

        setTimeout(() => {
            MenuOpt.style.display = 'none'
        },500)
        check = true
    }

    
})


close.addEventListener('click', () => {
    if (check == true) {
        body.classList.add('ForMobile')
        MenuOpt.classList.add('menuActive')
        MenuOpt.style.display = 'block'
        check = false
    } else {

        body.classList.remove('ForMobile')
        MenuOpt.classList.remove('menuActive')

        setTimeout(() => {
            MenuOpt.style.display = 'none'
        }, 500)
        check = true
    }

})




var mixer = mixitup('.mixuer')