// hubot scripts:
module.exports = function(bender) {
	bender.hear(/Hello!/, function(res) {
	  return res.reply("Hi there!");
	});

	bender.respond(/Who\'s on first\?/, function(res) {
	  return res.send("What's on second?");
	});
}