import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const galleryItem = `<div class="gallery__item">
        <a class="gallery__item" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
            />
        </a>
    </div>`;
  gallery.insertAdjacentHTML("beforeend", galleryItem);
});
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "below",
  captionDeley: 250,
});

console.log(galleryItems);
