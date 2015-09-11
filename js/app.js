

function Cat() {
	self = this;
	self.clicks = ko.observable(0);
	self.catName = ko.observable('Whiskers');
	self.imgSrc = ko.observable("img/1413379559_412a540d29_z.jpg")
	self.nickNames = ko.observableArray([
		"PussNBoots",
		"Little Leon",
		"Mr. Mice Muncher",
		"Highbrow Harry",
		"Stoic Stanley"
	]);
	
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

function ViewModel() {
	this.currentCat = ko.observable(new Cat());
	this.addAClick = function(){
		this.currentCat().clicks(this.currentCat().clicks()+1);
	};
}

$(function() {
	var myViewModel = new ViewModel();
	ko.applyBindings(myViewModel);

});




