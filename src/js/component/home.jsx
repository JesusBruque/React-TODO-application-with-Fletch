import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { getTodos } from "../../services/todo.js";

//Imports components
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {
	const [listTodo, setLisTodo] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [radio, setRadio] = useState({
		important: false,
		urgent: false,
	});

	console.log({ listTodo });

	const deleteTodo = (id) => {
		console.log(id);
	};

	const checkedTodo = (id) => {
		console.log(id);
	};

	console.log({ newTodo });

	const handelClick = () => {
		const newListTodo = [...listTodo, newTodo];
		setLisTodo(newListTodo);
	};

	console.log({ radio });

	const important = (e) => {
		const changeImportance = e.target.checked;
		setRadio(changeImportance);
	};

	const getAllTodos = () => {
		getTodos()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setLisTodo(data);
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
					onChange={(e) => setNewTodo(e.target.value)}
					size="lg">
					<FormControl
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</InputGroup>

				<Form>
					<div className="mb-3">
						<Form.Check
							inline
							onChange={important}
							type={"radio"}
							id={`important`}
							label={`Important`}
						/>
						<Form.Check
							inline
							type={"radio"}
							id={`urgent`}
							label={`Urgent`}
						/>
					</div>
				</Form>

				<div className="d-flex justify-content-center my-2">
					<Button
						onClick={handelClick}
						className="col-4"
						variant="primary">
						New Task
					</Button>{" "}
				</div>

				{listTodo.map((todo, index) => {
					console.log(todo);

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
				<span className="badge bg-warning me-2">
					Important Tasks: {}
				</span>
				<span className="badge bg-danger me-2">Urgent Tasks: {}</span>
				<span className="badge bg-success me-2">
					Complete Tasks: {}
				</span>
			</div>
		</div>
	);
};

export default Home;
