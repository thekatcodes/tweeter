$(document).ready(function () {
	let count = 140;
	$("textarea").on("keydown", function (event) {
		// console.log($(this).val().length)
		// console.log(e)

		//Increase counter when press "Backspace" and decrement counter when typing
		if (event.key === "Backspace" && count < 140) {
			count++;
			$(this).next(".tweet-btn-counter").children(".counter").text(count);
		} else if (event.key === "Backspace" && count === 140) {
			return false;
		} else {
			count--;
			$(this).next(".tweet-btn-counter").children(".counter").text(count);
		}

		//Add error class to make count number red when count is below 0
		if (count < 0) {
			$(this).next(".tweet-btn-counter").children(".counter").addClass("error");
		}

		//Remove error class that makes count number red when count is 0 or above
		if (count >= 0) {
			$(this)
				.next(".tweet-btn-counter")
				.children(".counter")
				.removeClass("error");
		}
	});
});
