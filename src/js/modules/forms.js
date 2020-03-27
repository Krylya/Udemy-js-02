const form = () => {
	const form = document.querySelector('form');

	const message = {
		loading: 'loading',
		success: 'Thank you!',
		failure: 'error (('
	};

	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});
}

export default form;