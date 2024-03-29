import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
galleryItems.forEach((item) => {
	const galleryItem = `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;
	gallery.insertAdjacentHTML("beforeend", galleryItem);
});
document.querySelector(".gallery").onclick = (event) => {
	event.preventDefault();
	if (event.target.classList.contains("gallery__image")) {
		// dodanie warunku if spowoduje, że w zdarzenie (kliknięcie) w elemencie z klasą "gallery__image" [w linijce 8 definiowaliśm tę klasę] zadziała
		const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1400" height="900">`);
		instance.show();
	}
};
console.log(galleryItems);
