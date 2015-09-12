
var initialCats = [
	{
		clicks: 0,
		name: 'Whiskers',
		imgSrc: "img/1413379559_412a540d29_z.jpg",
		nickNames: ["PussNBoots",
					"Little Leon",
					"Mr. Mice Muncher",
					"Highbrow Harry",
					"Stoic Stanley"]
	},
	{
		clicks: 0,
		name: 'Tiger',
		imgSrc: "img/4154543904_6e2428c421_z.jpg",
		nickNames: ["Tigger Too"]
	},
	{
		clicks: 0,
		name: 'Tabby',
		imgSrc: "img/434164568_fea0ad4013_z.jpg",
		nickNames: ["T-Bone", "Mr. T"]
	},
	{
		clicks: 0,
		name: 'Sleepy',
		imgSrc: "img/9648464288_2516b35537_z.jpg",
		nickNames: ["Zzzzz"]
	},
	{
		clicks: 0,
		name: 'Scaredy',
		imgSrc: "img/22252709_010df3379e_z.jpg",
		nickNames: ["Casper"]
	}
	
];

var Cat = function(data) {
	self = this;
	self.clicks = ko.observable(data.clicks);
	self.catName = ko.observable(data.name);
	self.imgSrc = ko.observable(data.imgSrc)
	self.nickNames = ko.observableArray(data.nickNames);
	
	self.catLevel = ko.computed( function(){
		var level = "Level: ";
		var clicks = this.clicks();
		if (this.clicks() < 6) {return level + "Cuddly Kitten";}
		if(this.clicks() > 5 && this.clicks() < 10){return level + "Young Kiddie";}
		if(this.clicks() > 9 && this.clicks() < 17){return level + "Teenage Tom";}
		if(this.clicks() > 16 && this.clicks() < 26){return level + "Fullgrown Feline";}
		if(this.clicks() > 25 && this.clicks() < 35){return level + "Middle-Aged Meowster";}
		if(this.clicks() > 34) {return level + "Old Hairball";}
	}, this);
}

var ViewModel = function() {
	var self = this;

	self.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	self.changeCat = function(newCat) {
		self.currentCat(newCat);
	}

	self.currentCat = ko.observable( self.catList()[0] );
	console.log("currentCat is " + self.currentCat().catName());
	
	self.addAClick = function(){
		self.currentCat().clicks(self.currentCat().clicks() + 1 );
	};
}

$(function() {

	ko.applyBindings(new ViewModel());

});




