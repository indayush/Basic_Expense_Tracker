import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		// console.log(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	console.log(filteredExpenses);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				{filteredExpenses.length === 0 ? (
					<p>No Expenses Found</p>
				) : (
					filteredExpenses.map((expense, index) => (
						<ExpenseItem
							key={expense.id}
							// key={index}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
				)}

				{/* Same way of writing True and false separately */}
				{/* True */}
				{/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}

				False --
				{filteredExpenses.length > 0 &&
					filteredExpenses.map((expense, index) => (
						<ExpenseItem
							key={expense.id}
							// key={index}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))} */}
			</Card>
		</div>
	);
};

export default Expenses;
