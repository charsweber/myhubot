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

  	var beers;
  	beers = ["http://organicxbenefits.com/wp-content/uploads/2011/11/organic-beer-health-benefits.jpg", "http://www.beer100.com/images/beermug.jpg", "http://www.bristolvantage.com/wp-content/uploads/2012/02/beer-calories1.jpg", "http://blog.collegebars.net/uploads/10-beers-you-must-drink-this-summer/10-beers-you-must-drink-this-summer-sam-adams-summer-ale.jpg", "http://media.treehugger.com/assets/images/2011/10/save-the-beers.jpg", "http://poemsforkush.files.wordpress.com/2012/04/beer.jpg", "http://www.wirtzbeveragegroup.com/wirtzbeveragenevada/wp-content/uploads/2010/06/Beer.jpg", "http://www.walyou.com/blog/wp-content/uploads/2010/06/giant-beer-glass-fathers-day-beer-gadgets-2010.jpg", "http://images.free-extras.com/pics/f/free_beer-911.jpg", "http://images.seroundtable.com/android-beer-dispenser-1335181876.jpg", "http://www.mediabistro.com/fishbowlDC/files/original/beer-will-change-the-world.jpg", "http://www.gqindia.com/sites/default/files/imagecache/article-inner-image-341-354/article/slideshow/1289/beer.JPG", "http://www.gqindia.com/sites/default/files/imagecache/article-inner-image-341-354/article/slideshow/1289/beer2.jpg", "http://www.gqindia.com/sites/default/files/imagecache/article-inner-image-341-354/article/slideshow/1289/Beer3.jpg", "http://365thingsaustin.com/wp-content/uploads/beer-flight1.jpg", "http://i102.photobucket.com/albums/m109/beanbone/Austin_Amber_200.jpg", "http://media.culturemap.com/crop/c8/a3/600x450/beer_tasting.jpg"];
  
    bender.hear(/.*(beer me).*/i, function(msg) {
      return msg.send(msg.random(beers));
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




