import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const itemGalleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", itemGalleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
			<a class="gallery__link" href="${original}">
				<img
				class="gallery__image"
					src="${preview}"
					alt="${description}"
				/>
			</a>`;
    })
    .join("");
}
let lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
