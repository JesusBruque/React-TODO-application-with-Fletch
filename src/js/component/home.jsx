import React, { useState } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";

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

	console.log({ newTodo });

	const handelClick = () => {
		const newListTodo = [...listTodo, newTodo];
		setLisTodo(newListTodo);
	};

	console.log({ radio });

	const important = (e) => {
		const changeCheck = e.target.checked;
		setRadio(changeCheck);
	};

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

				<div className="d-flex justify-content-center my-2">
					<Button
						onClick={handelClick}
						className="col-4"
						variant="primary">
						New Task
					</Button>{" "}
				</div>
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

				{listTodo.map((todo, index) => (
					<TodoList
						key={index}
						delete={deleteTodo}
						id={index}
						todo={todo}
					/>
				))}
			</div>

			<div className="card-body">
				<a href="#" className="card-link">
					Card link
				</a>
				<a href="#" className="card-link">
					Another link
				</a>
			</div>
		</div>
	);
};

export default Home;
