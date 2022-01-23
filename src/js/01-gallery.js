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

function onPictureClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const imageSrc = e.target.dataset.source;
  openModal(imageSrc);
}

function openModal(imageSrc) {
  const instance = basicLightbox.create(`
			<img src="${imageSrc}" alt="${imageSrc}" width="640" height="480"/>`);
  instance.show();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
    onClose: (instance) => {
      instance.removeEventListener("keydown", (e) => {
        instance.close();
      });
    };
  });
}
