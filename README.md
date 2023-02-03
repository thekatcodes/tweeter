# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Starter code is from github.com/lighthouse-labs/tweeter. This single page application was built using jQuery, JS, AJAX, HTML, CSS, Node, Express and is responsive across desktop and mobile platforms.

A particular attention was put on the UI of this web page.

## Final Product

### Desktop

- When the user types within the character limit, an ajax request will be sent to post the new tweet on the top of the tweet stack.
- When user scrolls past the tweet form, they can click on the arrow below "Write a new tweet" which will bring them back to the form.



*Error demo*
- The counter on the bottom right of the form keeps track of how many characters the user can submit.
- If the user has less than 0 characters left, the counter will turn red to indicate there is an error.
- If the user tries to submit when there is more than 140 characters or empty field, they will see a corresponding error message.



### Tablet/Mobile
- Responsive design using media query to switch from desktop to tablet/mobile format.
- The user profile picture and name become fixed to the top of the page.



## Future implementations and improvements
- Implement a way for users to tweet without having to go all the way to the top of the tweet stack


## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
- timeago.js
