var SlackBot = require('slackbots');
var channel = 'general';

var bot = new SlackBot({
	token: 'xoxb-1754127287879-1781786545393-TnhaqHTduMGLgWwqHtNfWGR9',
	name: 'loubot',
});

bot.on('start', () => {
	bot.postMessage(channel, 'hello :robot_face:');
	console.log('hello');
});

// text messages
bot.on('message', (data) => {
	if (data.type != 'message') {
		return;
	}
	handleMessage(data.text);
});

function handleMessage(message) {
	var lowerCaseMessage = message.toLowerCase(); // toLowercase in
	switch (lowerCaseMessage) {
		case 'hi':
		case 'hey':
		case 'hello':
		case 'sup?':
		case "what's up?":
		case "how's it going?":
		case 'hi there':
			sendMessage();
			break;

		default:
			return;
	}
}

function sendMessage() {
	var greeting = getGreetings();
	bot.postMessage(channel, greeting);
}

function getGreetings() {
	var greetings = [
		'hi',
		'hey',
		'hello',
		'sup?',
		"what's up?",
		"how's it going?",
		'hi there',
	];
	var random = Math.floor(Math.random() * greetings.length);
	var sayHello = greetings[random];
	return sayHello.charAt(0).toUpperCase() + sayHello.slice(1) + ' :robot_face:';
}

// number messages
/* bot.on('message', (a, b) => {
	if (isNaN(parseInt(a + b)) == false) {
		handleNumbers(a, b);
		console.log('numbers');
	}
});

function handleNumbers(a, b) {
	addNums(a, b);
}

function addNums(a, b) {
	var ans = a + b;
	bot.postMessage(channel, ans);
}
 */
