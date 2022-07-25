$('.bloog').slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

let nav1=document.querySelector(".navbar1");
let nav2=document.querySelector(".navbar2");


window.addEventListener('scroll', function() {
  console.log(window.pageYOffset + 'px');
  if(window.pageYOffset>150){
    nav1.style.display="none";
    nav2.style.display="block"
  }else{
    nav1.style.display="block";
    nav2.style.display="none"
  }
});