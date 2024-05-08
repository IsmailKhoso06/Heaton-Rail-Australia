

// Slide Function for Section 1 > Slick 


jQuery(document).ready(function(){
    $('.slick1').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false,
        dots:false,
        PauseOnHover:false,
        responsive: [
           
            {
              breakpoint: 430,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
    
}),

// slide function for Section 3 > Slick 

jQuery(document).ready(function(){
    $('.slick2').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true,
        dots:false,
        PauseOnHover:false,
        prevArrow: '.previousArrow',
        nextArrow:'.nextArrow',       
    });
})



