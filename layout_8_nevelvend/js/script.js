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


if (mediaQuery.matches){
  rightButton.innerHTML = `Подробнее`;
} else {
  rightButton.innerHTML = `Узнать больше`;
};

// CHANGE THIRD HEADING IN SECTION ABOUT
let thirdHeading = document.querySelector('.about__block-bottom > h3');


if (mediaQuery.matches){
  thirdHeading.innerHTML = `Экологичный`;
} else {
  thirdHeading.innerHTML = `От производителя`;
};

// TABS

$(document).ready(function(){
  $('.tabs__item').click(function(event){
    $(this).addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
    .closest('.tabs').find('.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
    
  });
});


// CALCULATIONS

$(document).ready(function() {

  // CALCULATIONS FOR SMALL BOX

    $('.calc__box-small').find('.box__button-minus').click(function () {
      var $input = $(this).parent().find('#small_box_quantity');
      var count = parseInt($input.val()) - 1;
      count = count < 0 ? 0 : count;
      $input.val(count);
      $input.change();
      let smallBoxPrice = parseInt($('#small_box_price').val());
      smallBoxPrice = parseInt($input.val()) * 750;
      smallBoxPrice = parseInt(smallBoxPrice) + " руб"; 
      $('#small_box_price').text(smallBoxPrice);
      let totalPrice = parseInt($('#small_box_price').val()) + parseInt($('#large_box_price').val());
          totalPrice += " руб"; 
      $('#total_price').text(totalPrice);
      return false;
    });
    $('.calc__box-small').find('.box__button-plus').click(function () {
      var $input = $(this).parent().find('#small_box_quantity');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      let smallBoxPrice = parseInt($('#small_box_price').val());
      smallBoxPrice = parseInt($input.val()) * 750;
      smallBoxPrice = parseInt(smallBoxPrice) + " руб"; 
      $('#small_box_price').text(smallBoxPrice);
      let totalPrice = parseInt($('#small_box_price').val()) + parseInt($('#large_box_price').val());
          totalPrice += " руб"; 
      $('#total_price').text(totalPrice);
      return false;
    });

    // CALCULATIONS FOR LARGE BOX

    $('.calc__box-large').find('.box__button-minus').click(function () {
      var $input = $(this).parent().find('#large_box_quantity');
      var count = parseInt($input.val()) - 1;
      count = count < 0 ? 0 : count;
      $input.val(count);
      $input.change();
      let largeBoxPrice = parseInt($('#large_box_price').val());
      largeBoxPrice = parseInt($input.val()) * 6000;
      largeBoxPrice = parseInt(largeBoxPrice) + " руб"; 
      $('#large_box_price').text(largeBoxPrice);
      let totalPrice = parseInt($('#small_box_price').val()) + parseInt($('#large_box_price').val());
          totalPrice += " руб"; 
      $('#total_price').text(totalPrice);
      return false;
    });
    $('.calc__box-large').find('.box__button-plus').click(function () {
      var $input = $(this).parent().find('#large_box_quantity');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      let largeBoxPrice = parseInt($('#large_box_price').val());
      largeBoxPrice = parseInt($input.val()) * 6000;
      largeBoxPrice = parseInt(largeBoxPrice) + " руб"; 
      $('#large_box_price').text(largeBoxPrice);
      let totalPrice = parseInt($('#small_box_price').val()) + parseInt($('#large_box_price').val());
          totalPrice += " руб";
      $('#total_price').text(totalPrice);
      return false;
    });


  });

// SWITCH BOX FORMATS

$('.box').click(function(event){
  $(this).addClass('box_active').siblings().removeClass('box_active');
    
});
//CHANGE SIZE OF ICONS IN THE "ORDER" SECTION
//   let smallBoxIconSource = document.querySelector('source[srcset="img/Order/Icons/order_box_small.svg"]');
//   let smallBoxIcon = document.querySelector('img[src="img/Order/Icons/order_box_small.svg"]');
  
//   let largeBoxIconSource = document.querySelector('source[srcset="img/Order/Icons/order_box_large.svg"]');
//   let largeBoxIcon = document.querySelector('img[src="img/Order/Icons/order_box_large.svg"]');


//   if (mediaQuery.matches){
//     smallBoxIconSource.setAttribute('srcset','img/Order/Icons/order_box_small_mobile.svg');
//     smallBoxIcon.setAttribute('src','img/Order/Icons/order_box_small_mobile.svg');
      
//     largeBoxIconSource.setAttribute('srcset','img/Order/Icons/order_box_large_mobile.svg')
//     largeBoxIcon.setAttribute('src','img/Order/Icons/order_box_large_mobile.svg');  
// } else {
//     smallBoxIconSource.setAttribute('srcset','img/Order/Icons/order_box_small.svg');
//     smallBoxIcon.setAttribute('src','img/Order/Icons/order_box_small.svg');
      
//     largeBoxIconSource.setAttribute('srcset','img/Order/Icons/order_box_large.svg')
//     largeBoxIcon.setAttribute('src','img/Order/Icons/order_box_large.svg'); 
// };

// //PRIVACY POLICY
$(document).ready(function(){
  $('.block__title').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
    if($('.block').hasClass('one')){
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }
  });
});
// //POPUP "SUCCESS"
// const formMakeOrder = document.querySelector('#make_order');
// console.log(formMakeOrder);
// const popupMakeOrder = document.querySelector('#popup');
// console.log(popupMakeOrder);
// const popupSuccess = document.querySelector('#popup_success').closest('.popup');
// console.log(popupSuccess.style.cssText);
// // const closeArea = document.querySelector('.popup__area');
// const popupLinkWaiting = document.querySelector('.popup__link-waiting');
// const popupContentSuccess = document.querySelector('.popup__content_success');
// console.log(popupContentSuccess);
// formMakeOrder.addEventListener('submit', showSuccess);
// // formButton.addEventListener("click", showSuccess,{"passive":true});

// function showSuccess(e){
//   if(!e.preventDefault()){
   
//   popupMakeOrder.style.cssText = `
//     opacity: 0;
//     visibility: hidden;`
//   popupSuccess.style.cssText = `
//     opacity: 1;
//     visibility: visible;
//     `
//     popupContentSuccess.style.cssText = `
//     opacity: 1;
//     transform: perspective(600px) translate(0px, 0%) rotateX(0deg);
//     `

//   };
// };

// popupLinkWaiting.addEventListener('click', closeSuccess);

// function closeSuccess(e){
//    popupSuccess.style.cssText = `
//     opacity: 0;
//     visibility: hidden;
//     `
// }


//Объекты, при нажатии на которые будет открываться попап
const popupLinks = document.querySelectorAll('.popup-link');
// Для блокировки скролла внутри элемента body
const body = document.querySelector('body');
// //Для блокировки внутреннего отступа при открытии большого попапа
// const lockPadding = document.querySelectorAll(".lock-padding");
// //Чтобы не было двойных нажатий
// let unlock = true;
// //Значение задержки
// const timeout = 800;


//Открытие popup
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++){
    const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function(e){
        const popupName = popupLink.getAttribute('href').replace('#','');
        const currentPopup = document.getElementById(popupName);
          popupOpen(currentPopup);
          e.preventDefault();
      });
  }
}
//Закрытие popup
const popupCloseIcon = document.querySelectorAll('.popup__close');

if (popupCloseIcon.length > 0){
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    
    el.addEventListener('click', function(e){
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}



function popupOpen(currentPopup){
  if(currentPopup){
    const popupActive = document.querySelector('.popup.open');
      if(popupActive){
        popupClose(popupActive);
      }
        currentPopup.classList.add('open');
          currentPopup.addEventListener('click', function(e){
            //Закрытие при нажатии на пустую область вокруг модального окна
            if (!e.target.closest('.popup__content')){
              popupClose(e.target.closest('.popup'));
            }
            //Закрытие при нажатии на кнопку "X"
            if(e.target.closest('.popup__close')){
                popupClose(e.target.closest('.popup'));
              }
          });
  }
}

function popupClose(popupActive){
    popupActive.classList.remove('open');
}

// Показ модального окна после валидации
const mainOrderForm = document.forms.orderForm;
const orderFormName = mainOrderForm.nameInput;
const orderFormPhone = mainOrderForm.phoneInput;
const successPopup = document.getElementById('popup_success');
const popupLinkWaiting = document.querySelector('.popup__link-waiting');

mainOrderForm.addEventListener('submit', checkInputs);

function checkInputs(event){
  if(!orderFormName.value || !orderFormPhone.value){
    event.preventDefault();
  }
  const openedPopup = document.getElementById('popup');
  openedPopup.classList.remove('open');
  successPopup.classList.add('open');
}
//Закрытие по кнопке "ожидаю звонка"
popupLinkWaiting.addEventListener('click', function(e){
  console.log(successPopup.classList);
  successPopup.classList.remove('open');
  e.preventDefault();
});

successPopup.addEventListener('click',function(e){
  if (!e.target.closest('.popup__content')){
              successPopup.classList.remove('open');
            }
});
// Закрытие по пустой области вокруг Success Popup

// //Блокировка скролла
// function bodyLock(){
//   constPaddingValue = window.innerWidth - document.querySelector('.container').offsetWidth + 'px';

// if(lockPadding.length > 0){
//   for (let index = 0; index < lockPadding.length; index++) {
//     const el = lockPadding[index];
//     el.style.paddingRight = lockPaddingValue;
//     }
//   }
//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add('lock');

//   unlock = false;
//   setTimeout(function(){
//     unlock = true;
//   }, timeout);
// }

// //Разблокировка скролла
// function bodyUnlock(){
//   setTimeout(function(){
//     if(lockPadding.length > 0){
//       for(let index = 0; index < lockPadding.length; index++){
//         const el = lockPadding[index];
//         el.style.paddingRight = '0px';
//       }
//     }
//     body.style.paddingRight = '0px';
//     body.classList.remove('lock');
//   }, timeout);
// }

// document.addEventListener('keydown', function(e){
//   if(e.which === 27){
//     const popupActive = document.querySelector('.popup.open');
//     popupClose(popupActive);
//   }
// });

// //Полифилы для Explorer 11
// (function(){
//   //проверяем поддержку
//   if (!Element.prototype.closest){
//     // реализуем
//     Element.prototype.closest = function(css){
//       var node = this;
//       while (node) {
//         if (node.matches(css)) return node;
//         else node = node.parentElement;
//       }
//       return null;
//     };
//   }
// })();


// (function(){
//   //проверяем поддержку
//   if (!Element.prototype.matches){
//     // определяем свойство
//     Element.prototype.matches = Element.prototype.matchesSelector ||
//     Element.prototype.webkitMatchesSelector ||
//     Element.prototype.mozMatchesSelector ||
//     Element.prototype.msMatchesSelector;
//   }
// })();

// STIRRER

var theWindow = $(window); 

var winHeight = theWindow.height(); 

var animDuration = winHeight / 2; 

var animData = { 

  container: document.getElementById('lottie-three'), 

  renderer: 'svg', 

  loop: false, 

  autoplay: false, 

  path: 'img/json/MixerSequence.json' 

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

    // animObject.pause(); 

  anim.pause(); 

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
