const d = new Date();
const year = d.getFullYear();
let span = document.getElementById('year');
span.innerText = year;

//Editor
tinymce.init({
	selector: 'textarea#editor',
	menubar: false,
});
