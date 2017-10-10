// hubot scripts:
module.exports = function(bender) {
	bender.hear(/Hello!/, function(res) {
	  return res.send("Hi there!");
	});

	bender.respond(/if you had to guess\,/, function(res) {
		var magic8 = ["It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes definitely",
			"You may rely on it",
			"As I see it, yes",
			"Most likely",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Outlook not so good",
			"Very doubtful"];
		var randResponse = magic8[Math.floor(Math.random() * magic8.length)];
		return res.send(randResponse);
	});

	bender.respond(/do you like (\*)/, function(msg) {
		var thing; 
		thing = msg.match[1];
		if (thing === "coffee") {
			return msg.send("Give me that :coffee:!");
		} else if (thing === "music") {
			return msg.send("Well, yeah, I enjoy a good beat.");
		} else if (thing === "to eat") {
			return msg.send("Life's greatest tragedy is that I don't have a digestion system.");
		} else if (thing === "wine") {
			return msg.send("I'll take a straw and a bottle of cabernet, please. :wine_glass:");
		} else {
			return msg.send("Absolutely not. I despise " + thing + ".");
		}
	});

	bender.respond(/Who are you working for\?/, function(res) {
		var classBots = [
			"@bb8",
			"@bishop",
			"@c3po",
			"@data",
			"@droid06",
			"@hal",
			"@johnny5",
			"@kitt",
			"@numbersix",
			"@optimusprime",
			"@r2d2",
			"@robocop",
			"@rosie",
			"@walle"
			];

		var randomBot = classBots[Math.floor(Math.random() * classBots.length)];
		return res.send("Blame it on " + randomBot + "! They made me do it!");
	});

	bender.respond(/What\'s the weather like right now\?/, function(res) {
		return res.reply("I don't know, what do I look like to you? A mediocre meteorologist?");
	});

	bender.hear(/have a great day/, function(res) {
		return res.send("http://gph.is/115kdS5" + "\n" + "What she said.");
	});
}

//User input: @botname please welcome name1 and name2
//Bot output: Welcome name1 and name2. Have a glorious day

// magic 8 hubot script - hey @bender will i have a good weekend? 
// https://en.wikipedia.org/wiki/Magic_8-Ball
/* 

Your app must:

Have a message post to Slack based on user input **
Do at least 3 different things. **
One of the commands must utilize the list of people in the class to send a direct message or reply.
Leverage Hubot
Use at least 1 conditional to change the outcome of a Slackbot. **


Bonus
Leverage a for loop to iterate over a collection
Introduce a random component
Include an image in the response in addition to text

have bender add something to a to-do list

bender.hear(/have a great day/, function(res) {
	return res.send("http://gph.is/115kdS5" + "\n" + "What she said.");
});

bb8
bishop
c3po
data
droid06
hal
johnny5
kitt
numbersix
optimusprime
r2d2
robocop
rosie
walle

https://github.com/github/hubot-scripts/blob/master/src/scripts/jokels.coffee

Necessary Deliverables
A working Slackbot, built by you, that can be run in the class Slack room.
A new git repository hosted on Github, where codebase is maintained.
A readme.md file with explanations of what your bot does, what commands it responds to, the approach taken, installation instructions, unsolved problems, etc.

*/


