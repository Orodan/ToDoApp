// Load the todo model
var Todo = require("./models/todo");

module.exports = function (app) {

	// Api --------------------------------

	// Get all todos
	app.get('/api/todos', function (req, res) {

		Todo.find(function (err, todos) {
			if (err) 
				res.send();

			res.json(todos);
		});

	});

	// Create a todo
	app.post('/api/todos', function (req, res) {

		Todo.create({
			text: req.body.text,
			done: false
		}, function (err, todo) {
			if (err) 
				res.send(err);

			Todo.find(function (err, todos) {
				if (err)
					res.send(err);

				res.json(todos);
			});
		});

	});

	// Delete a todo
	app.delete('/api/todos/:todo_id', function (req, res) {

		Todo.remove({
			_id: req.params.todo_id
		}, function (err, todo) {
			if (err)
				res.send(err);

			Todo.find(function (err, todos) {
				if (err)
					res.send(err);

				res.json(todos);
			});
		});

	});

	// Application  ---------------------------
	app.get("*", function (req, res) {
		res.sendfile("./public/index.html");
	})

}