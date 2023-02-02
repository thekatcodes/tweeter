$(document).ready(function () {
	$("textarea").on("keyup", function (event) {
		// console.log($(this).val().length)
		// console.log(e)

		let count = 140 - $(this).val().replace(/\s/g, "").length;
		const $counter = $(this).next(".tweet-btn-counter").children(".counter");

		//Display increasing counter when press "Backspace" and decrement counter when typing
		if (event.key === "Backspace" && count <= 140) {
			$counter.text(count);
		} else {
			$counter.text(count);
		}

		//Add error class to make count number red when count is below 0
		if (count < 0) {
			$counter.addClass("error");
		}

		//Remove error class that makes count number red when count is 0 or above
		if (count >= 0) {
			$counter.removeClass("error");
		}
	});
});
