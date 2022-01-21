import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const itemGalleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", itemGalleryMarkup);
galleryRef.addEventListener("click", onPictureClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
			<div class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
			</div>`;
    })
    .join("");
}
