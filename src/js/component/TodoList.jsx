import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const TodoList = (props) => {
	return (
		<>
			<ul className="list-group list-group-flush">
				<li className="list-group-item"></li>
				<li
					className="list-group-item"
					onClick={() => props.delete(props.id)}>
					{props.todo}
				</li>
			</ul>
		</>
	);
};

TodoList.propTypes = {
	todo: PropTypes.string,
	id: PropTypes.number,
	delete: PropTypes.func,
};

export default TodoList;
