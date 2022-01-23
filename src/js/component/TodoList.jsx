import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

import "../../styles/index.css";

const TodoList = (props) => {
	const [check, setCheck] = useState(false);

	return (
		<>
			<ul className="list-group list-group-flush container">
				<li className="list-group-item"></li>
				<li className="list-group-item row">
					{props.todo.label}

					<Form.Check
						className="checkbox"
						onChange={(e) =>
							props.check(props.id, e.target.checked)
						}
						defaultChecked={props.todo.done}
						type={"checkbox"}
						id={`done`}
					/>
					<p onClick={() => props.delete(props.id)}>Borrar</p>
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
