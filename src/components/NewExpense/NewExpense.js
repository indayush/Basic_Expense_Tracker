import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	const setEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{isEditing === false ? (
				<button onClick={setEditingHandler}>Add New Expense</button>
			) : (
				<ExpenseForm
					onCancel={stopEditingHandler}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			)}
			{/* <button onClick={setEditingHandler}>Add New Expense</button> */}
		</div>
	);
};

export default NewExpense;
