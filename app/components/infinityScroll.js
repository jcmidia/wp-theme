import axios from 'axios';
import { PUBLIC_PATH } from '../config';

const api_url = PUBLIC_PATH + '/wp-json/wp/v2/posts?_embed';
const per_page = 9;
let $loadButton;
let $postContainer;
let page = 1;
let loading = false;
let finish = false;
let categories = [];

export const init = () => {
  $loadButton = document.querySelector('.inifity-load .btn');
  $postContainer = document.querySelector('.posts-container .row');

  if ($loadButton && $postContainer) {
    _pushCategories();
    $loadButton.addEventListener('click', _loadMore);
  }
};

const _pushCategories = () => {
  const $activeCategory = document.querySelector('.categories-menu li a.active');
  if ($activeCategory.classList.contains('all')) {
    const $categoriesMenu = document.querySelectorAll('.categories-menu li a');
    $categoriesMenu.forEach((category) => {
      categories.push(category.dataset.id);
    });
  } else {
    categories.push($activeCategory.dataset.id)
  }
}

const _getCategories = (post) => {
  return post._embedded['wp:term'][0].map(cat => cat.name).join(', ');
};

const _getPostTemplate = (post) => {
  return `<article id="post-${post.id}" class="post-item">
    <a href="${post.link}">
      <figure class="news-item__image">
        <img src="${post._embedded['wp:featuredmedia'][0].media_details.sizes.default.source_url}">
      </figure>
      <div class="post-item__content">
        <h3 class="eyebrow">${_getCategories(post)}</h3>
        <h2 class="title-h3">
          ${post.title.rendered}
        </h2>
        <p class="small">${post.excerpt.rendered}</p>
      </div>
    </a>
  </article>`;
};

const _finishInfinity = () => {
  finish = true;
  $loadButton.style.display = 'none';
};

const _loadMore = (e) => {
  e.preventDefault();
  if (loading || finish) return;

  $loadButton.innerText = 'Loading...';
  loading = true;
  page++;

  axios.get(api_url, { params: { page, per_page, categories } }).then((response) => {
    response.data.forEach((post) => {
      const postEl = document.createElement('div');
      const postHtml = _getPostTemplate(post);
      postEl.innerHTML = postHtml;
      postEl.className = 'col-md-4 col-xs-12';
      $postContainer.appendChild(postEl);
    });

    if (response.data.length < per_page)
      _finishInfinity();
  }).catch((error) => {
    if (error.response.status === 400) {
      _finishInfinity();
    }
  }).finally(() => {
    $loadButton.innerText = 'Load more';
    loading = false;
  })
};