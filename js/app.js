new WOW().init();


$(document).ready(function () {
	var counter = 0;

	function updateCounter() {
		if (counter == 101) {
			clearInterval(foo);
			$('.loadingpage').addClass("pageisloaded");
		} else {
			$('.counter p').html(counter);
			counter++;
		}
	}

	var foo = setInterval(updateCounter, 13);

});