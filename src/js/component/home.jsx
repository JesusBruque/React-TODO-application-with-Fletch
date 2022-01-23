import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { getTodos, putTodos } from "../../services/todo.js";

//Imports components
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState({
		label: "",
		done: false,
	});

	const deleteTodo = (id) => {
		const newListTodo = [...listTodo];
		newListTodo.splice(id, 1);
		putTodos(newListTodo)
			.then((res) => {
				getAllTodos();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const checkedTodo = (id, checked) => {
		const newListTodo = [...listTodo];
		const todoChecked = newListTodo[id];
		todoChecked.done = checked;
		putTodos(newListTodo)
			.then((res) => {
				getAllTodos();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handelClick = () => {
		const newListTodo = [...listTodo, newTodo];
		putTodos(newListTodo)
			.then((res) => {
				getAllTodos();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getAllTodos = () => {
		getTodos()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setListTodo(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getAllTodos();
	}, []);

	return (
		<div className="card container d-flex justify-content-center col-6">
			<div className="card-body row">
				<div className="col-12 d-flex justify-content-center">
					<h5 className="card-title">TO DO LIST</h5>
				</div>
				<div className="col-12 d-flex justify-content-center">
					<p className="card-text row">
						Add the tasks to create your list
					</p>
				</div>
				<InputGroup
					id="new-todo"
					onChange={(e) =>
						setNewTodo({ ...newTodo, label: e.target.value })
					}
					size="lg">
					<FormControl
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</InputGroup>

				<div className="d-flex justify-content-center my-2">
					<Button
						onClick={handelClick}
						className="col-4"
						variant="primary">
						New Task
					</Button>{" "}
				</div>

				{listTodo.map((todo, index) => {
					return (
						<TodoList
							key={index}
							delete={deleteTodo}
							id={index}
							todo={todo}
							check={checkedTodo}
						/>
					);
				})}
			</div>
			<div>
				<span className="badge bg-light text-dark me-2">
					Total Tasks: {listTodo.length}
				</span>
			</div>
		</div>
	);
};

export default Home;
