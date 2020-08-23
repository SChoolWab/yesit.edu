$().ready(function () {
    $('.slick-carousel').slick({
        arrows: true,
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
let check = true;

MenuBtn.addEventListener('click', () => {
    if (check == true) {
        document.querySelector('body').style.marginLeft = '50%';
        MenuOpt.style.display = 'block';
        check = false
    } else {
            
        document.querySelector('body').style.marginLeft = '0%';
        MenuOpt.style.display = 'none';
        check = true
    }

    
})


close.addEventListener('click', () => {
    if (check == true) {
        document.querySelector('body').style.marginLeft = '50%';
        MenuOpt.style.display = 'block';
        check = false
    } else {

        document.querySelector('body').style.marginLeft = '0%';
        MenuOpt.style.display = 'none';
        check = true
    }


})




