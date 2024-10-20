import { useState } from "react";

function TodoForm(props) {
	const [newItem, setNewItem] = useState("");

	function handleSubmitForm(e) {
		e.preventDefault();
		if (newItem === "") return;

		props.addToDo(newItem);

		setNewItem("");
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
		</>
	);
}

export default TodoForm;
