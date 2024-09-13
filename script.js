const form = document.getElementById('form-validation');
let validForm = false;
const successMassage = document.querySelector('.success-massage');
successMassage.innerHTML = 'O Campo A é menor que o campo B.';
const errorMassage = document.querySelector('.error-massage');
errorMassage.innerHTML = 'O Campo A precisa ser maior que o campo B para ser validado.';

function formValidation() {
	let formA = document.querySelector('#form-A')
	let formB = document.querySelector('#form-B')
	return formA.value < formB.value
};

form.addEventListener('submit', function(e) {
	e.preventDefault()
	validForm = formValidation()

	if (validForm) {
		successMassage.style.display = 'block';
		errorMassage.style.display = 'none'
	} else {
		errorMassage.style.display = 'block';
		successMassage.style.display = 'none'
	}
})