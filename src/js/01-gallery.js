import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const gallery = galleryItems
  .map(({ preview, description, original }) => {
    return `<a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"></a>`;
  })
  .join('');

galleryEl.innerHTML = gallery;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
