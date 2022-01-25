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
  window.addEventListener("keydown", onEscClick);

  if (e.target.nodeName !== "IMG") return;
  const imageSrc = e.target.dataset.source;

  const showOriginalImage = basicLightbox.create(
    `<img src="${imageSrc}" alt="${imageSrc}" width="640" height="480"/>`,
    {
      onClose: () => {
        window.removeEventListener("keydown", onEscClick);
      },
    }
  );

  showOriginalImage.show();

  function onEscClick(e) {
    if (e.key === "Escape") {
      showOriginalImage.close();
    }
  }
}
