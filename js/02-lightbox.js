import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
}

createGalleryMarkup(galleryItems);
function createGalleryMarkup(object) {
  const markup = object.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
    ""
  );
  gallery.insertAdjacentHTML("beforeend", markup);
}

let galleryLightbox = new SimpleLightbox(".gallery a");
