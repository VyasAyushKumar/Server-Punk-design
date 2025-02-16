const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function(){
        fixed.style.display = "block";
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

// var elem1 = document.querySelector("#elem1");
// elem1.addEventListener("mouseenter", function(){
//    var image =  elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
    
// });

var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image");
             fixed.style.backgroundImage = `url(${image})`
            
        })
})

function swipperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      });
};

swipperAnimation();


var lder = document.querySelector(".loader");
setTimeout(function () {
    lder.style.top = "-100%";
}, 3500)
 

var pB = document.querySelector(".nav-btn p");
var fulls = document.querySelector("#full-scr");
pB.addEventListener("click", function(){
    fulls.style.top =  0
})