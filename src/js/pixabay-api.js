import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


// import { images } from './pixabay-api.js';
// console.log(images);

const form = document.querySelector('.search-form');
const input = form.querySelector('input');
let userData;
let images = [];
const gallery = document.querySelector('ul.gallery');

function handleSubmit(event) {
  event.preventDefault();
  const textInput = input.value.trim();

  if (textInput === "") {
    iziToast.warning({
    title: 'Caution',
    message: 'This field must be filled in',
    position: 'topLeft',
  }) } else {
    userData = textInput;
    form.reset();
    gallery.innerHTML = "";

    const searchUrl = `https://pixabay.com/api/?key=43769580-78f5aea5f54664bb89b2b40f7&q=${userData}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(searchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        images = [];
        if (data.hits.length > 0) {
          for (let i = 0; i < data.hits.length; i++) {
            let pic = {};
            pic.url = data.hits[i].webformatURL;
            pic.largeUrl = data.hits[i].largeImageURL;
            pic.tags = data.hits[i].tags;
            pic.likes = data.hits[i].likes;
            pic.views = data.hits[i].views;
            pic.comments = data.hits[i].comments;
            pic.downloads = data.hits[i].downloads;
            images.push(pic);
          }
          const createElGallery = image => {
            return `<li class="gallery-item">
              <a class="gallery-link" href="${image.largeUrl}">
                <img class="gallery-image"
                  src="${image.url}"
                  alt="${image.tags}"
                />
              </a>
              <div class="item-info">
                <div class="item-data">
                  <p class="item-param">Likes</p>
                  <p class="item-counter">${image.likes}</p>
                </div>
                <div class="item-data">
                  <p class="item-param">Views</p>
                  <p class="item-counter">${image.views}</p>
                </div>
                <div class="item-data">
                  <p class="item-param">Comments</p>
                  <p class="item-counter">${image.comments}</p>
                </div>
                <div class="item-data">
                  <p class="item-param">Downloads</p>
                  <p class="item-counter">${image.downloads}</p>
                </div>
              </div>
            </li>`;
          };
          const createGallery = images.map(image => createElGallery(image)).join('');
          gallery.innerHTML = createGallery;
          let lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
          })
        } else {
          iziToast.error({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
          });
        }
      })
      .catch(error => {
        console.error('Виникла помилка: ', error);
      });
  }
}

form.addEventListener("submit", handleSubmit);