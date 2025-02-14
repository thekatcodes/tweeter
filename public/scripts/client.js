$(function () {
	// Take in an array of tweet data objects and call the createTweetElement function for each tweet object in the array, then appends the return value from the createTweetElement function to the .tweets-container section.
	const renderTweets = function (tweets) {
        let newestTweets = tweets.reverse();
        for (let tweet of newestTweets) {
			const $tweet = createTweetElement(tweet);
			$(".tweet-container").append($tweet);
		}
	};

	// Take one tweet data object and format each value in the object in HTML format
	const createTweetElement = function (data) {
		const content = data.content;
		const user = data.user;

		//convert timestamp into how long it has been since tweet was tweeted
		const created_at = timeago.format(data.created_at);

		const $tweet = $(`<article></article>`);

		const header = $(`<header class="tweet-header">
    <span class="tweet-left">
        <img src=${user.avatars}
            alt="${user.name}'s avatar" class="user-pic">
        <p>${user.name}</p>
    </span>
    <span class="tweet-right">
        <h4>${user.handle}</h4>
    </span>
</header>`);

		const paragraph = $('<p class="article-text"> <b></b> </p>');
		paragraph.text(content.text);

		const footer = $(`<footer class="tweet-footer">
        <time class="timeago" datetime="${created_at}">${created_at}</time>
    <div class="tweet-footer-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
    </div>
</footer>`);

		$tweet.append(header).append(paragraph).append(footer);
		return $tweet;
	};

	// Retrieve submitted form content and renders it to the web page
	const loadTweets = function () {
		$.getJSON("/tweets/").then((tweetData) => {
			$(".tweet-container").empty();
			renderTweets(tweetData);
		});
	};

	$("form").on("submit", function (event) {
		event.preventDefault();
		const $textarea = $(this).children("textarea");
		const $data = $textarea.serialize();

		$(".tweet-error").empty();

		// Display error message if text area is empty
		if (!$textarea.val().trim()) {
			$(".tweet-error").empty();
			const errorMessage = "Your tweet is empty";
			const errorAlert = $(
				`<p class="error-message"><i class="fa-regular fa-circle-xmark"></i> ${errorMessage}</p>`
			);

			return $(".tweet-error")
				.append(errorAlert)
				.hide()
				.appendTo(".tweet-error")
				.slideDown(300);
		}

		// Display error message if maximum character count is exceeded
		if ($(".counter").val() < 0) {
			$(".tweet-error").empty();
			const errorMessage = "Maximum character count exceeded";
			const errorAlert = $(
				`<p class="error-message"><i class="fa-regular fa-circle-xmark"></i> ${errorMessage}</p>`
			);

			return $(".tweet-error")
				.append(errorAlert)
				.hide()
				.appendTo(".tweet-error")
				.slideDown(300);
		}

		// On successful submission, reset form input and counter
		$textarea.val("");
		const $count = $(this).find(".counter");
		$count.val(140);

		//POST request to /tweets/ which fires loadTweets function
		$.post("/tweets/", $data).then(loadTweets);
	});

	// Existing tweets automatically loads on the page
	loadTweets();
});
