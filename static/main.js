Dropzone.autoDiscover = false;

console.log('hello');

const myDropzone = new Dropzone("#my-dropzone", {
	url: "upload/",
	maxFiles: 4,
	maxFilesize: 2,
	acceptedFiles: '.png, .jpg, .jpeg, .txt',
})






