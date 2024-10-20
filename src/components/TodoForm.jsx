import React, { useState } from "react";

function TodoForm() {
	const [value, setValue] = useState("");

	function handleSubmit(e) {
		e.preventDefault;
	}

	return (
		<form className="TodoForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="todo-input"
				placeholder="Type your task here..."
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className="todo-btn" type="submit">
				Enter Task
			</button>
		</form>
	);
}

export default TodoForm;
