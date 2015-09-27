/**
* todoController Module
*
* Description
*/
angular.module('todoController', [])

	.controller('mainController', function ($scope, $http, Todos) {
		$scope.formData = {};

		console.log("Test"); 

		// GET ====================================================
		// When landing on the page, get all todos and show them
		Todos.get()
			.success(function (data) {
				$scope.todos = data;
			})
			.error(function (data) {
				console.log("Error : ", data);
			})
		
		// CREATE =================================================
		// When submitting the add form, send the text to the node API
		$scope.createTodo = function () {

			// If form is not empty
			if(!$.isEmptyObject($scope.formData)) {

				Todos.create($scope.formData)
					.success(function (data) {
						$scope.formData = {};
						$scope.todos = data;
					});

			}

		};

		// DELETE =================================================
		// Delete a todo after checking it
		$scope.deleteTodo = function (id) {

			Todos.delete(id)
				.success(function (data) {
					$scope.todos = data;
				});

		};

	});