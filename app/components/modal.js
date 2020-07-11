import {TweenMax, Power4} from "gsap";

export const init = () => {
  _initEvents();
};

const _initEvents = () => {
  document.querySelectorAll('.modal').forEach(el => el.addEventListener('click', _closeModal));
  document.querySelectorAll('.btn-modal').forEach(el => el.addEventListener('click', _openModal));
  document.querySelectorAll('.btn-newsletter a').forEach(el => el.addEventListener('click', _openModal));
};

const _closeModal = (e) => {
  e.preventDefault();

  if (
    e.target.closest('.modal__content') &&
    (!e.target.classList.contains('.modal__close') && !e.target.closest('.modal__close'))
  ) return;

  const $modal = e.target.closest('.modal');
  const $modalContent = $modal.querySelector('.modal__content');
  
  TweenMax.to($modalContent, 0.5, {y: '-55%', opacity: 0, ease: Power4.easeOut});
  TweenMax.to($modal, 0.5, {opacity: 0, display: 'none', delay: 0.3, ease: Power4.easeOut});
};

const _openModal = (e) => {
  e.preventDefault();

  const modalId = e.target.hash.replace('#', '');
  const $modal = document.getElementById(modalId);
  const $modalContent = $modal.querySelector('.modal__content');
  
  TweenMax.fromTo($modal, 0.5, {opacity: 0, display: 'none'}, {opacity: 1, display: 'block', ease: Power4.easeOut});
  TweenMax.fromTo($modalContent, 0.7, {opacity: 0, y: '-55%'}, {y: '-50%', opacity: 1, delay: 0.3, ease: Power4.easeOut});
};
