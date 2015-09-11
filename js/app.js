

var Cat = function(data) {
	self = this;
	self.clicks = ko.observable(data.clicks);
	self.catName = ko.observable(data.name);
	self.imgSrc = ko.observable(data.imgSrc)
	self.nickNames = ko.observableArray(data.nickNames);
	
	self.catLevel = ko.computed(function(){
		var level = "Level: ";
		var clicks = self.clicks();
		if (self.clicks() < 6) {return level + "Cuddly Kitten";}
		if(self.clicks() > 5 && self.clicks() < 10){return level + "Young Kiddie";}
		if(self.clicks() > 9 && self.clicks() < 17){return level + "Teenage Tom";}
		if(self.clicks() > 16 && self.clicks() < 26){return level + "Fullgrown Feline";}
		if(self.clicks() > 25 && self.clicks() < 35){return level + "Middle-Aged Meowster";}
		if(self.clicks() > 34) {return level + "Old Hairball";}
	});
}

var ViewModel = function() {
	var self = this;

	self.currentCat = ko.observable( new Cat({
		clicks: 0,
		name: "Whisters",
		imgSrc: "img/1413379559_412a540d29_z.jpg",
		nickNames: ["PussNBoots",
					"Little Leon",
					"Mr. Mice Muncher",
					"Highbrow Harry",
					"Stoic Stanley"]
		}) 
	);

	self.addAClick = function(){
		self.currentCat().clicks(self.currentCat().clicks() + 1 );
	};
}

$(function() {

	ko.applyBindings(new ViewModel());

});




