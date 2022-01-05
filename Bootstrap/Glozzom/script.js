//DATE COPY
const d = new Date();
let newYear = d.getFullYear();
let empty = document.getElementById('year');
empty.innerHTML = newYear;
//MODAL

//* data-gallery / data-toggle

const photos = document.querySelectorAll('[data-gallery="example-gallery"]');

photos.forEach((photo) => {
	photo.addEventListener('click', (e) => {
		e.preventDefault();
		const lightbox = new Lightbox(photo);
		lightbox.show();
	});
});

//* Testimonials
$('.slider').slick({
	infinite: true,
	slideToShow: 1,
	slideToScroll: 1,
});
