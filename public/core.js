var todo = angular.module('todo', []);

function mainController($scope, $http) {

	$scope.formData = {};

	// When landing on the page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log("Error : ", data);
		});

	// When submitting the add form, send the text to the node API
	$scope.createTodo = function () {

		$http.post('/api/todos', $scope.formData)
			.success(function (data) {
				$scope.formData = {};	// Clear the form
				$scope.todos = data;
				console.log(data);
			})
			.error(function (data) {
				console.log("Error : ", data);
			});

	};

	// Delete a todo after checking it
	$scope.deleteTodo = function (id) {

		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function (data) {
				console.log("Error : ", data);
			})

	};

}