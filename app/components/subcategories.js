import {TweenMax, Power4} from "gsap";
let $wrapper;
let $button;
let $menu;

export const init = () => {
  $wrapper = document.querySelector('.categories-menu');
  $button = document.querySelector('.categories-menu__current');
  $menu = document.querySelector('.categories-menu ul');
  
  if ($wrapper && $button && $menu && window.innerWidth <= 480) {
    $button.addEventListener('click', _toggleMenu);
    document.addEventListener('click', _closeMenu);
  }
};

const _toggleMenu = (event) => {
  event.preventDefault();
  $wrapper.classList.toggle('opened');
  
  if ($wrapper.classList.contains('opened')) {
    TweenMax.to($menu, 0.5, {opacity: 1, display: 'block', ease: Power4.easeInOut});
  } else {
    TweenMax.to($menu, 0.5, {opacity: 0, display: 'none', ease: Power4.easeInOut});
  }
};

const _closeMenu = (event) => {
  if (!event.target.closest('.categories-menu') && !event.target.classList.contains('categories-menu')) {
    $wrapper.classList.remove('opened');
    TweenMax.to($menu, 0.5, {opacity: 0, display: 'none', ease: Power4.easeInOut});
  }
}
