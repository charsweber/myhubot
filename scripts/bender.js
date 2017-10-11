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

	bender.respond(/do you like (.*)/i, function(msg) {
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

	bender.respond(/(jokel|jokels|joke)/i, function(msg) {
      return msg.http('http://jokels.com/random_joke').get()(function(err, res, body) {
        var joke, vote;
        joke = JSON.parse(body).joke;
        vote = joke.up_votes - joke.down_votes;
        msg.send("" + joke.question);
        return setTimeout(function() {
          msg.send("" + joke.answer);
          return setTimeout(function() {
            return msg.send(vote + " upvotes - " + joke.bitly_url);
          }, 1000);
        }, 4000);
    	})
  	});

	bender.respond(/What\'s the weather like right now\?/, function(res) {
		return res.reply("I don't know, what do I look like to you? A mediocre meteorologist?");
	});

	bender.hear(/have a great day/, function(res) {
		return res.send("http://gph.is/115kdS5" + "\n" + "What she said.");
	});

	bender.hear(/i solemnly swear that i am up to no good/, function(res) {
		return res.send("https://i.pinimg.com/736x/f9/00/7f/f9007fb0cff5d0ed4ca3050cd4662431--harry-potter-art-harry-potter-movies.jpg");
	});
}




