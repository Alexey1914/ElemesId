// document.addEventListener('click', documentEvents, function(el) {
//    let target = el.target;
// });
// // --------------------Скролл-------------------------
// function documentEvents(e) {
//    const target = e.target;

//    if (target.closest('[data-nav]')) {
//       const navParent = target.closest('[data-nav]').dataset.nav;
//       const navElement = document.querySelector(navParent);
//       const headerHeight = document.querySelector('.header').offsetHeight;

//       if (navElement) {
//          window.scrollTo({
//             top: navElement.offsetTop - (headerHeight + 10),
//             behavior: 'smooth',
//          });
//       }
//       e.preventDefault();
//    }
// }
// // ----------------------Счётчик----------------------
// window.addEventListener('load', startCounter);

// function startCounter() {
//    function initCounter(itemCounter) {
//       let counter = itemCounter ? itemCounter : document.querySelectorAll('[data-counter]');
//       if (counter){
//          counter.forEach(counterEl => {
//             animateCounter(counterEl);
//          });
//       }
//    }
//    function animateCounter(counterEl){
//       let animTemp = null;
//       const duration = parseInt(counterEl.dataset.counterEl) ? parseInt(counterEl.dataset.counterEl) : 1000;
//       const start = parseInt(counterEl.innerHTML);
//       const position = 0;
//       const step = (temp) => {
//          if (!animTemp) animTemp = temp;
//          const progress = Math.min((temp - animTemp) / duration, 1);
//          counterEl.innerHTML = Math.floor(progress * (position + start));
//          if (progress < 1){
//             window.requestAnimationFrame(step);
//          }
//       }
//       window.requestAnimationFrame(step);
//    }
//    // initCounter();
   
//    // -------------------------------При скролле-------------------------------
//    let options = {
//       threshold: 0.8,
//    }
//    let observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//          if (entry.isIntersecting){
//             const target = entry.target;
//             const counterItems = target.querySelectorAll('[data-counter]');
//             if (counterItems.length){
//                initCounter(counterItems);
//             }
//          }
//       })
//    }, options);

//    let sections = document.querySelector('.about-block');
//    if (sections) {
//       observer.observe(sections);
//    };
// }
// // ----------------------Меню-Бургер------------------
// function showBurger() {
//    const burgerMenu = document.querySelector('.header__nav');
//    const body = document.querySelector('body');
//    const burgerClass = document.querySelector('.header__burger');

//    burgerClass.addEventListener('click', function() {
//        burgerClass.classList.toggle('active-burger');
//        burgerMenu.classList.toggle('active-burger');
//        body.classList.toggle('lock');
//    })
// };
// showBurger()

// // ----------------------Шапка при скролле------------------
// const headerClass = document.querySelector('.header');
// const headerBody = document.querySelector('.header__wrapper');
// const headerContainer = document.querySelector('.header__container');
// const callback = function (entries, observer) {
//    if (entries[0].isIntersecting) {
//       headerBody.classList.remove('_active__scroll');
//       headerContainer.classList.remove('_active__scroll');
//    } else {
//       headerBody.classList.add('_active__scroll');
//       headerContainer.classList.add('_active__scroll');
//    }
// }
// const headerObserver = new IntersectionObserver(callback);
// headerObserver.observe(headerClass);