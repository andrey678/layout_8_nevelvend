// CHECK FOR WEBP SUPPORT
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

// BURGER MENU
$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.menu__link').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// CHANGE RIGHT BUTTON TEXT

let rightButton = document.querySelector('.main__link:last-child');
const mediaQuery = window.matchMedia('(max-width: 450px)');
console.log(mediaQuery);

if (mediaQuery.matches){
  rightButton.innerHTML = `Подробнее`;
} else {
  rightButton.innerHTML = `Узнать больше`;
};
console.log(rightButton);

// STIRRER

var theWindow = $(window); 

var winHeight = theWindow.height(); 

var animDuration = winHeight / 2; 

var animData = { 

container: document.getElementById('lottie-three'), 

renderer: 'svg', 

loop: false, 

autoplay: false, 

path: 'json/MixerSequence.json' 

}; 

var anim = bodymovin.loadAnimation(animData); 

$( window ).scroll(function() { 

animatebodymovin(animDuration, anim); 

}); 

function animatebodymovin(duration, animObject) { 

var scrollPosition = theWindow.scrollTop(); 

var maxFrames = animObject.totalFrames; 

var frame = (maxFrames / 100) * (scrollPosition / (duration / 100)); 

animObject.goToAndStop(frame, true); 

} 

anim.addEventListener("enterFrame", function (animation) { 

if (animation.currentTime > (anim.totalFrames - 1)) { 

animObject.pause(); 

//anim.pause(); 

} 

}); 


// ==============================================================================
// var animData = {
//   container: document.getElementById('lottie-three'),
//   path: 'json/MixerSequence.json',
//   renderer: 'svg',
//   loop: false,
//   autoplay: false,
//   name: "animScroll",
// }, animScroll, tl;


// var animScroll = bodymovin.loadAnimation(animData)


// animScroll.addEventListener('DOMLoaded', function () {
//   tl = new TimelineMax({repeat: 0})
//   tl.to({frame: 0}, 1, {
//     frame: animScroll.totalFrames-1,
//     onUpdate: function() {
//       animScroll.goToAndStop(Math.round(this.target.frame), true)
//     },
//     Ease:Linear.easeNone
//   })
  
// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//   triggerElement: ".env-three",
//   offset: 500,
//   duration: 5000 }).setTween(tl).setPin("#lottie-three").addTo(controller);

// })

// $(window).load(function(){
//    // $("#lottie-three svg").removeAttr('viewBox');
//    // $("#lottie-three svg").attr('viewBox','0 0 400 1240');
//    // $("#lottie-three svg").attr('viewBox','0 0 300 1140');
// })
