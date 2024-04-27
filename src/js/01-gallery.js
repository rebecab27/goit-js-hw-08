import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Importul datelor pentru galerie
import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

  const galleryMarkup = galleryItems
    .map(
      item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `
    )
    .join('');

  gallery.innerHTML = galleryMarkup;

  // Inițializarea SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a');
});
console.log(galleryItems);
