document.addEventListener('DOMContentLoaded', function () {
	const header = document.querySelector('#header');

	function toggleHeaderClass() {
		if (window.scrollY > 0) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	}

	toggleHeaderClass();

	window.addEventListener('scroll', toggleHeaderClass);
});

$(document).ready(function () {
	$('.feedbacks__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		speed: 1000,
		draggable: false
	});
});