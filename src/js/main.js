(() => {
	const markAllReadButton = document.querySelector('.mark-all-read-button');
	markAllReadButton.addEventListener('click', (e) => {
		e.preventDefault();
		const notifications = document.querySelectorAll('.notification');
		notifications.forEach((notification) => {
			notification.classList.remove('unread');
		});

		const unreadCount = document.querySelector('.unread-count');
		unreadCount.textContent = '0';
	});
})();