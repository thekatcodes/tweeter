/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {
	const tweetData = [
		{
			user: {
				name: "Newton",
				avatars: "https://i.imgur.com/73hZDYK.png",
				handle: "@SirIsaac",
			},
			content: {
				text: "If I have seen further it is by standing on the shoulders of giants",
			},
			created_at: 1675110591962,
		},
		{
			user: {
				name: "Descartes",
				avatars: "https://i.imgur.com/nlhLi3I.png",
				handle: "@rd",
			},
			content: {
				text: "Je pense , donc je suis",
			},
			created_at: 1675196991962,
		},
	];
// Take in an array of tweet data objects and call the createTweetElement function for each tweet object in the array, then appends the return value from the createTweetElement function to the .tweets-container section.
	const renderTweets = function (tweets) {
		for (let tweet of tweets) {
			const $tweet = createTweetElement(tweet);
			$(".tweet-container").append($tweet);
		}
    };
    
// Take one tweet data object and format each value in the object in HTML format
	const createTweetElement = function (data) {
		const content = data.content;
		const user = data.user;
		const created_at = data.created_at;

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
    <span>${created_at}</span>
    <div class="tweet-footer-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
    </div>
</footer>`);

		$tweet.append(header).append(paragraph).append(footer);
		return $tweet;
	};

	renderTweets(tweetData);
});
