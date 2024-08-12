import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("String Calculator App", () => {
	test("should display 0 for an empty string", () => {
		render(<App />);
		fireEvent.change(screen.getByLabelText(/Enter numbers:/), {
			target: { value: "" },
		});
		fireEvent.click(screen.getByText(/Calculate/));
		expect(screen.getByText(/Sum: 0/)).toBeInTheDocument();
	});

	test("should display the number itself for a single number", () => {
		render(<App />);
		fireEvent.change(screen.getByLabelText(/Enter numbers:/), {
			target: { value: "1" },
		});
		fireEvent.click(screen.getByText(/Calculate/));
		expect(screen.getByText(/Sum: 1/)).toBeInTheDocument();
	});

	test("should return the sum of two numbers separated by a comma", () => {
		render(<App />);
		fireEvent.change(screen.getByLabelText(/Enter numbers:/), {
			target: { value: "1,5" },
		});
		fireEvent.click(screen.getByText(/Calculate/));
		expect(screen.getByText(/Sum: 6/)).toBeInTheDocument();
	});

	test("should handle new lines between numbers", () => {
		render(<App />);
		fireEvent.change(screen.getByLabelText(/Enter numbers:/), {
			target: { value: "1\n2,3" },
		});
		fireEvent.click(screen.getByText(/Calculate/));
		expect(screen.getByText(/Sum: 6/)).toBeInTheDocument();
	});

	test("should handle custom delimiters", () => {
		render(<App />);
		fireEvent.change(screen.getByLabelText(/Enter numbers:/), {
			target: { value: "//;\n1;2" },
		});
		fireEvent.click(screen.getByText(/Calculate/));
		expect(screen.getByText(/Sum: 3/)).toBeInTheDocument();
	});

	test("should throw an error for negative numbers", () => {
		render(<App />);
		fireEvent.change(screen.getByLabelText(/Enter numbers:/), {
			target: { value: "1,-2" },
		});
		fireEvent.click(screen.getByText(/Calculate/));
		expect(
			screen.getByText(/Negative numbers not allowed: -2/)
		).toBeInTheDocument();
	});
});
