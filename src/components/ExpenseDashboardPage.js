import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpensesList />
    </div>
  );
};

export default ExpenseDashboardPage;