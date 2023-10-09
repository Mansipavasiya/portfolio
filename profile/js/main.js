$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});



var typed = new Typed(".type", {
    strings: [
        "Web Developer"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});


// var preloader = document.getElementById('preloader');

//     setTimeout(function myFunction(){
//         preloader.style.display = 'none';
//     }, 2000);



mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()}

  function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    }else{
      mybutton.style.display = "none";
    }
  }

  function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

