yearbook_app.factory('yearbookFactory', function($http) {
	var students = [
		{full_name: "Ed Lee",
		 quote: "Discover the talents within yourself.",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "ed",
		 id: 1},
		{full_name: "Bryant Luu",
		 quote: "You should have told me sooner so I can think of something cool.",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "bryant",
		 id: 2},
		{full_name: "Hyun Jung",
		 quote: "Hello, world!",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "hyun",
		 id: 3},
		{full_name: "Michael Tran",
		 quote: "Hire me, I am 'MEAN'!",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "michael",
		 id: 4},
		{full_name: "Pariece McKinney",
		 quote: "If a man does not have the sauce then he is lost, but that same man can be lost in the sauce.",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "pariece",
		 id: 5},
		{full_name: "Anika Radiya-Dixit",
		 quote: "Enjoy life while you can, because you only one.",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "anika",
		 id: 6},
		{full_name: "Luca Bertolasi",
		 quote: "Hello, world!",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "luca",
		 id: 7},
		{full_name: "Jay Brar",
		 quote: "The Dojo was awesome, learned a lot, had a lot of fun.",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "jay",
		 id: 8},
		{full_name: "Archana Mudiam",
		 quote: "Tenacious ninja!",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "archana",
		 id: 9},
		{full_name: "John Halbert",
		 quote: "Hello, world!",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "john",
		 id: 10},
		{full_name: "Mike Berger",
		 quote: "Ninja gold is my favorite game.",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "mike",
		 id: 11},
		{full_name: "Sina Sareth",
		 quote: "Hello, world!",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "sina",
		 id: 12},
		{full_name: "Naveed Taj",
		 quote: "Yes, yes, yes, no worries!",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "naveed",
		 id: 13},
		{full_name: "Wengjie Wu",
		 quote: "Veni, vidi, vici.",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "wengjie",
		 id: 14},
		{full_name: "Elizabeth Alvarez",
		 quote: "It won\'t install!? Where is Jay!!!",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "liz",
		 id: 15},
		{full_name: "Andrew Doan",
		 quote: "var champions = \"Golden State Warriors 2015\";",
		 github: "github.com",
		 linkedin: "linkedin.com",
		 name: "andrew",
		 id: 16}
	]
	var factory = {};
	factory.getStudents = function(callback) {
		callback(students);
	}
	return factory;
});