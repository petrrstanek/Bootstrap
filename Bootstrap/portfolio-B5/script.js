//* collapse closing effect
const hrefs = document.querySelectorAll('a[role="button"]');
console.log(hrefs);

hrefs.forEach((href) => {
	href.addEventListener('click', (e) => {
		const panels = document.querySelectorAll('.collapse');
		panels.forEach((panel) => {
			panel.classList.remove('show');
		});
	});
});

//* LightBox
const photos = document.querySelectorAll('[data-gallery="example-gallery"]');

photos.forEach((photo) => {
	photo.addEventListener('click', (e) => {
		e.preventDefault();
		const lightbox = new Lightbox(photo);
		lightbox.show();
	});
});
