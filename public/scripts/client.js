$(function () {
	// Take in an array of tweet data objects and call the createTweetElement function for each tweet object in the array, then appends the return value from the createTweetElement function to the .tweets-container section.
    const renderTweets = function(tweets) {
        let ascendTweets = tweets.reverse();
        for (let tweet of ascendTweets) {
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

		const paragraph = $(`<p class="article-text"> <b>${content.text}</b> </p>`);

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
            $('.tweet-container').empty();
            renderTweets(tweetData);
        })
	};
    $("form").submit(function(event) {
		event.preventDefault();
		const $textarea = $(this).children("textarea");
		const $data = $textarea.serialize();
		$textarea.val("");

		// The user should be given an error that their tweet content is too long or that it is not present (ideally separate messages for each scenario)
		// if (!$textarea.val().trim()) {
		// 	return alert("Your text field is empty");
		// }
		// if ($textarea.val().length > 140) {
		// 	return alert("Maximum character count exceeded");
		// }

		// $textarea.val("");
		$.post("/tweets/", $data).then(loadTweets);
	});
});
