import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

createGalleryMarkup(galleryItems);
function createGalleryMarkup(object) {
  const markup = object.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
    ""
  );
  gallery.insertAdjacentHTML("beforeend", markup);
}

const onGalleryImgClick = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const bigImg = basicLightbox.create(
    `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`,
    {
      onShow: (bigImg) => {
        document.addEventListener("keydown", onEscapeKeyDown);
      },
      onClose: (bigImg) => {
        document.removeEventListener("keydown", onEscapeKeyDown);
      },
    }
  );
  bigImg.show();
  function onEscapeKeyDown(event) {
    if (event.code !== "Escape") {
      return;
    }
    bigImg.close();
  }
};
gallery.addEventListener("click", onGalleryImgClick);
