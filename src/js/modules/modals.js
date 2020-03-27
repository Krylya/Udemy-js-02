const modals = (options) => {

	function bindPopup() {
		const trigger = document.querySelector(options.triggerSelector),
		modal = document.querySelector(options.modalSelector),
		close = document.querySelector(options.closeSelector),
		modalList = document.querySelectorAll("[data-modal]");

		trigger.addEventListener('click', (e) => {
			e.preventDefault();
			modal.classList.add('active');
			document.body.style.overflow = 'hidden';
		});

		close.addEventListener('click', (e) => {
			modal.classList.remove('active');
			document.body.style.overflow = '';
		});

		modal.addEventListener('click', (e) => {
			if(e.target === modal) {
				modal.classList.remove('active');
				document.body.style.overflow = '';
			}
		});

console.log(modalList);
	}// bindPopup

	bindPopup();
}

export default modals;