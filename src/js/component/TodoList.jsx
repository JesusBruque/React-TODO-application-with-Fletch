import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const TodoList = (props) => {
	return (
		<>
			<ul className="list-group list-group-flush container">
				<li className="list-group-item"></li>
				<li className="list-group-item d-flex bd-highlight">
					<div className="p-2 flex-grow-1 bd-highlight">
						{props.todo.label}
					</div>
					<Form.Check
						className="checkbox p-2 bd-highlight"
						onChange={(e) =>
							props.check(props.id, e.target.checked)
						}
						defaultChecked={props.todo.done}
						type={"checkbox"}
						id={`done`}
					/>
					<i
						className="far fa-trash-alt p-2 bd-highlight my-1"
						onClick={() => props.delete(props.id)}></i>
				</li>
			</ul>
		</>
	);
};

TodoList.propTypes = {
	todo: PropTypes.object,
	id: PropTypes.number,
	delete: PropTypes.func,
	check: PropTypes.func,
};

export default TodoList;
