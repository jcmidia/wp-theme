import {TweenMax, Power4} from "gsap";

let $progressBar;
let $progressContent;

export const init = () => {
  $progressBar = document.querySelector('.main-nav__progress span');
  $progressContent = document.querySelector('.progress-content');

  if ($progressContent && $progressBar) document.addEventListener('scroll', _checkProgress);
};

const _checkProgress = (event) => {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  const top = $progressContent.offsetTop;
  const height = $progressContent.offsetHeight;

  let progress = scroll / (height - top);

  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;

  TweenMax.to($progressBar, 0.3, {scaleX: progress, ease: Power4.easeOut});
}

