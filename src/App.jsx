import "./index.css";
import { useState } from "react";

function App() {
	const [newItem, setNewItem] = useState("");
	const [todos, setTodos] = useState("");

	function handleSubmitForm(e) {
		e.preventDefault();

		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title: newItem, completed: false },
			];
		});

		setNewItem("");
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}

				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	return (
		<>
			<form onSubmit={handleSubmitForm} className="new-item-form">
				<div className="form-row">
					<label htmlFor="item">New Item</label>
					<input
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
						type="text"
						id="item"
					/>
				</div>
				<button className="btn">Add Item</button>
			</form>
			<h1 className="header">To Do List</h1>
			<ul className="list">
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

export default App;
