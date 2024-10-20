import "./index.css";

function App() {
	return (
		<>
			<form className="new-item-form">
				<div className="form-row">
					<label htmlFor="item">New Item</label>
					<input type="text" id="item" />
				</div>
				<button className="btn">Add Item</button>
			</form>
			<h1>To Do List</h1>
		</>
	);
}

export default App;
