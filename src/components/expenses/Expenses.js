import "./Expenses.scss";
import ExpenseItem from "../expense-item/ExpenseItem";
import Card from "../card/Card";
import ExpenseFilter from "../expense-filter/ExpenseFilter";
import React, { useState } from "react";
import ExpensesChart from "../expenses-chart/ExpensesChart";

const Expenses = (props) => {
  const [selectedValue, setSelectedValue] = useState("2020");

  const selectHandler = (valor) => {
    setSelectedValue(valor);
  };

  const filteredValues = props.items.filter((e) => {
    return e.date.getFullYear().toString() === selectedValue;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedValue} onSelectHandler={selectHandler} />
      <ExpensesChart expenses={filteredValues} />
      <li>
        {filteredValues.length === 0 ? (
          <p className="expenses-list__fallback"> No content found </p>
        ) : (
          filteredValues.map((item, index) => (
            <ul className="expenses-list">
              <ExpenseItem
                key={index}
                date={item.date}
                title={item.title}
                amount={item.amount}
              />
            </ul>
          ))
        )}
      </li>
    </Card>
  );
};

export default Expenses;
