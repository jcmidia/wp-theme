import {TweenMax, Power4} from "gsap";

let $mainNav;
let $menu;
const $body = document.querySelector('body');

export const init = () => {
  const $toggleButton = document.querySelector('.toggle-button');
  $mainNav = document.querySelector('.main-nav');
  $menu = document.querySelector('.main-nav__menu');
  if ($toggleButton && $menu) $toggleButton.addEventListener('click', _toggleMenu);
};

const _toggleMenu = (e) => {
  e.preventDefault();
  $body.classList.toggle('menu-opened');
  const opened = $body.classList.contains('menu-opened');
  const tween = opened ? {opacity: 1, display: 'flex'} : {opacity: 0, display: 'none'};
  const duration = opened ? 0.5 : 1;

  TweenMax.to($menu, duration, {...tween, ease: Power4.easeInOut});
  if (opened) TweenMax.set($mainNav, {y: 0, clearProps: 'all', overwrite: 'all'});
};
