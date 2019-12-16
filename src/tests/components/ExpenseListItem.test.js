import ExpensesListItem from '../../components/ExpenseListItem';
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem render correctly', () => {
  const wrapper = shallow(<ExpensesListItem {...expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});