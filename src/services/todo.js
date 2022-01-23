export const getTodos = () => {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/GuillermoSR",
		{ method: "GET" }
	);
};

export const putTodos = (data) => {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/GuillermoSR",
		{
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};
