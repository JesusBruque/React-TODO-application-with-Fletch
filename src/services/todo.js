const URL = "https://assets.breatheco.de/apis/fake/todos/user/GuillermoSR";

export const getTodos = () => {
	return fetch(URL);
};

export const putTodos = (data) => {
	return fetch(URL, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
