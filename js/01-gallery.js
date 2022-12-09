import { galleryItems } from "./gallery-items.js";
// Change code below this line

// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */

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

gallery.addEventListener("click", selectImg);
function selectImg(evt) {
  evt.preventDefault();
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`
    )
    .show();
}

// console.log(basicLightbox);
