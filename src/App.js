import React, { useState } from "react";
import { add } from "./utils";

function App() {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [error, setError] = useState("");

	const handleCalculate = () => {
		try {
			const sum = add(input);
			setResult(`Sum: ${sum}`);
			setError("");
		} catch (e) {
			setError(e.message);
			setResult("");
		}
	};

	return (
		<div className="container">
			<h1>String Calculator</h1>
			<label htmlFor="numbers">Enter numbers:</label>
			<br />
			<textarea
				id="numbers"
				rows="4"
				cols="50"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<br />
			<div className="button-wrapper">
				<button onClick={handleCalculate} className="custom-button">
					Calculate
				</button>
			</div>
			<h2>{result || error}</h2>
		</div>
	);
}

export default App;
