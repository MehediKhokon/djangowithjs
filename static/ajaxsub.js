// ajax form submission

const alertBox = document.getElementById('alert-box')
const form = document.getElementById('p-form')
const imageBox = document.getElementById('img-box')


//get the input field using their ids
const name = document.getElementById('id_name')
const description = document.getElementById('id_description')
const image = document.getElementById('id_image')

//csrf token
const csrf = document.getElementsByName('csrfmiddlewaretoken')
console.log(csrf)

const url = ""


const handleAlert = (type, text) =>{
	alertBox.innerHTML = `<div class="alert alert-${type}" role="alert">
							  ${text}
						  </div>`
}

image.addEventListener('change', ()=>{
	const img_data = image.files[0]
	const url = URL.createObjectURL(img_data)
	console.log(url)

	imageBox.innerHTML = `<img src="${url}" width="100%">`
})


form.addEventListener('submit', (e)=>{
	e.preventDefault()

	const formData = new FormData()
	formData.append('csrfmiddlewaretoken', csrf[0].value)
	formData.append('name', name.value)
	formData.append('description', description.value)
	formData.append('image', image.files[0])


	$.ajax({
		type: 'POST',
		url: url,
		enctype: 'multipart/form-data',
		data: formData,
		success: function(response){
			console.log(response)
			handleAlert('success', 'Form submitted successfully')
			setTimeout(() => {
				alertBox.innerHTML = ""
				imageBox.innerHTML= ""
				name.value = ""
				image.value = ""
				description.value = ""
			}, 3000)
		},
		error: function(error){
			console.log(error)
			handleAlert('danger', 'some error occur..')
		},
		cache: false,
		contentType: false,
		processData: false,
	})
})


console.log(form)