yearbook_app.controller('yearbookController', function($scope, yearbookFactory) {
	yearbookFactory.getStudents(function(data) {
		$scope.students = data;

		// $scope.toggle = function(s) {
		// 	s.myQuote = !s.myQuote;
		// 	s.myContact = !s.myContact;
		// }
	});
});