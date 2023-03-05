// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line



import SimpleLightbox from "simplelightbox";



const galleryEl = document.querySelector('.gallery');

const gallery = galleryItems
  .map(({ preview, description, original }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"></a></li>`;
  })
  .join('');

galleryEl.innerHTML = gallery;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);

