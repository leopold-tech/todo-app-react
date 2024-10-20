import React from "react";

function TodoList({ todos }) {
	return (
		<>
			<ul className="list">
				{todos.length === 0 && "No todos here. Add some!"}
				{todos.map((todo) => {
					<li key={todo.id}>
						<label>
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={(e) =>
									toggleTodo(todo.id, e.target.checked)
								}
							/>
							{todo.title}
						</label>
						<button
							className="btn btn-danger"
							onClick={() => deleteTodo(todo.id)}
						>
							Delete
						</button>
					</li>;
				})}
			</ul>
		</>
	);
}

export default TodoList;
