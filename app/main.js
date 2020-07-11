import {TweenMax, Power4} from "gsap";
import { init as initMenuMobile } from './components/menuMobile';
import { init as initDropdownMenu } from './components/dropdownMenu';
import { init as initInfinity } from './components/infinityScroll';
import { init as initSearch } from './components/search';
import { init as initModal } from './components/modal';
import { init as initSharing } from './components/sharing';
import { init as initProgressBar } from './components/progressBar';
import { init as initSubcategories } from './components/subcategories';

const $body = document.querySelector('body');

export function main () {
	initScrollEvents();
	initMenuMobile();
	initDropdownMenu();
	initInfinity();
	initSearch();
	initModal();
	initSharing();
	initProgressBar();
	initSubcategories();
}

const initScrollEvents = () => {
	let lastScroll = 0;
	let showMenu = true;
	const $nav = document.querySelector('.main-nav');

	const _updateNav = (scroll) => {
		if (scroll > $nav.offsetHeight) {
			if(!$body.classList.contains('scrolled')) {
				TweenMax.set($nav, {y: '-100%'});
				$body.classList.add('scrolled');
			};
		} else {
			if ($body.classList.contains('scrolled')) {
				TweenMax.set($nav, {y: '0%', clearProps: 'all'});
				$body.classList.remove('scrolled');
			};
		}
		
		if (scroll > lastScroll && scroll > $nav.offsetHeight) {
			if (showMenu) {
				TweenMax.to($nav, 0.7, {y: '-100%', ease: Power4.easeOut});
				showMenu = false;
			}
		} else {
			if (!showMenu) {
				TweenMax.to($nav, 1.5, {y: '0%', clearProps: 'all', ease: Power4.easeOut});
				showMenu = true;
			}
		}

		lastScroll = scroll;
	};

	document.addEventListener('scroll', (event) => {
		const scroll = document.body.scrollTop || document.documentElement.scrollTop;
		_updateNav(scroll);
	});

	const _stickyShare = () => {
		$shareButton.forEach(($btn) => {
			const $nextEl = document.querySelector('.post-container').nextElementSibling;
			
			document.addEventListener('scroll', () => {
				const top = $nav.offsetHeight + 50;
				const left = $btn.parentNode.getBoundingClientRect().left;
				const elemTop = $btn.parentNode.getBoundingClientRect().top;
				const nextTop = $nextEl.getBoundingClientRect().top;

				if (elemTop <= top) {
					TweenMax.set($btn, {position: 'fixed', top, left});
				} else {
					TweenMax.set($btn, {position: 'relative', top: 0, left: 0, clearProps: 'all'});
				}

				if (nextTop <= window.innerHeight / 2) {
					TweenMax.to($btn, 0.3, {opacity: 0, ease: Power4.easeOut});
				} else {
					TweenMax.to($btn, 0.3, {opacity: 1, ease: Power4.easeOut});
				}
			});
		});
	};

	const $shareButton = document.querySelectorAll('.sharing-menu');
	if ($shareButton) _stickyShare();
}
