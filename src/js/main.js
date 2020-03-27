import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
	modals({
		triggerSelector: '.callback-btn', 
		modalSelector: '#callback', 
		closeSelector: '.modal-callback > .modal-close-btn'
	});
});