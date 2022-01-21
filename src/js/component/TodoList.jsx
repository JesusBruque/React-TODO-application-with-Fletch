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
				<li
					className={
						"list-group-item row " +
						(props.important == { important: true }
							? "bg-warning"
							: null)
					}
					onClick={() => props.delete(props.id)}>
					{props.todo}

					<Form.Check
						className="checkbox"
						onChange={(e) => setCheck(e.target.checked)}
						type={"checkbox"}
						id={`done`}
					/>
				</li>
			</ul>
		</>
	);
};

TodoList.propTypes = {
	todo: PropTypes.string,
	id: PropTypes.number,
	delete: PropTypes.func,
	important: PropTypes.bool,
};

export default TodoList;
