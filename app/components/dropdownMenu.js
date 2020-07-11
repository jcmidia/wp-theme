import {TweenMax, Power4} from "gsap";

export const init = () => {
  const menusWithSub = document.querySelectorAll('.menu-item-has-children');
  menusWithSub.forEach((el) => {
    if (window.innerWidth > 480 || el.classList.contains('show-mobile')) {
      el.addEventListener('mouseenter', _showSubMenu);
      el.addEventListener('mouseleave', _hideSubMenu);
    }
  });
};

const _showSubMenu = (event) => {
	const $subMenu = event.target.querySelector('.sub-menu');
	TweenMax.to($subMenu, 0.5, {opacity: 1, display: 'block', ease: Power4.easeOut});
};

const _hideSubMenu = (event) => {
	const $subMenu = event.target.querySelector('.sub-menu');
	TweenMax.to($subMenu, 0.3, {opacity: 0, display: 'none', ease: Power4.easeOut});
};