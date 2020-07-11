import axios from 'axios';
import {TweenMax, Power4} from "gsap";
import { PUBLIC_PATH } from '../config';
import { debounceEvent } from '../utils';

const api_url = PUBLIC_PATH + '/wp-json/wp/v2/search';
const per_page = 30;

const $body = document.querySelector('body');
let lastSearch = '';
let $searchForm;
let $searchContainer;
let $searchToggle;
let $searchInput;
let $searchResult;
let $searchError;

export const init = () => {
  $searchForm = document.querySelector('.search-form');
  $searchToggle = $searchForm.querySelector('.search-form__submit');
  $searchContainer = $searchForm.querySelector('.search-form__container');
  $searchInput = $searchContainer.querySelector('.search-form__input');
  $searchResult = $searchContainer.querySelector('.search-form__result');
  $searchError = $searchContainer.querySelector('.search-form__error');

  _initEvents();
};

const _initEvents = () => {
  $searchToggle.addEventListener('click', _toggleSearch);
  $searchContainer.querySelector('.search-form__clear').addEventListener('click', _clear);
  $searchInput.addEventListener('keyup', debounceEvent(_search, 250));
  document.addEventListener('click', _close);
  TweenMax.set($searchContainer, {display: 'none', opacity: 0, y: -15});
};

const _close = (event) => {
  if (!event.target.closest('.search-form') && !event.target.classList.contains('search-form')) {
    $body.classList.remove('search-opened');
    TweenMax.to($searchContainer, 0.3, {display: 'none', opacity: 0, y: -15, ease: Power4.easeOut});
  }
}

const _setSize = () => {
  const minHeight = document.querySelector('.main-nav').offsetHeight;
  TweenMax.set($searchContainer, {minHeight: minHeight});
};

const _toggleSearch = (e) => {
  e.preventDefault();
  $body.classList.toggle('search-opened');
  if ($body.classList.contains('search-opened')) {
    _setSize();
    TweenMax.to($searchContainer, 0.7, {display: 'block', opacity: 1, y: 0, ease: Power4.easeOut, onComplete: () => {
      $searchInput.focus();
    }});
  } else {
    TweenMax.to($searchContainer, 0.3, {display: 'none', opacity: 0, y: -15, ease: Power4.easeOut});
  }
};

const _clear = (e) => {
  e.preventDefault();
  $searchInput.value = '';
  _search();
  $searchInput.focus();
};

const _resetError = () => {
  TweenMax.set($searchError, {display: 'none', opacity: 0});
  $searchError.innerText = '';
}

const _showError = (error) => {
  $searchResult.innerHTML = '';
  TweenMax.set($searchError, {display: 'block', opacity: 1});
  $searchError.innerText = error;
}

const _search = (e) => {
  lastSearch = $searchInput.value;

  _resetError();
  if ($searchInput.value === '') return $searchResult.innerHTML = '';

  const search = $searchInput.value;
  axios.get(api_url, { params: { per_page, search } }).then((response) => {
    if (response.data.length === 0)
      return _showError('Sorry, no results found. Please try with another term.');

    if (search !== lastSearch) return;

    let results = '';
    response.data.forEach((post) => {
      results += `<a href="${post.url}"><span>${post.title}</span></a>`;
    });

    $searchResult.innerHTML = results;
  }).catch((error) => {
    _showError(error.message);
  });
};