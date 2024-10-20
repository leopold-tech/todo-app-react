import React, { useState } from "react";

function TodoForm() {
	return (
		<form className="TodoForm">
			<input
				type="text"
				className="todo-input"
				placeholder="Type your task here..."
			/>
			<button className="todo-btn" type="submit">
				Enter Task
			</button>
		</form>
	);
}

export default TodoForm;
