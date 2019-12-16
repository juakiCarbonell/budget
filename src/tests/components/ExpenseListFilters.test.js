import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters} from '../fixtures/filters';
import moment from 'moment';


test('should render ExpenseList correctly', () => {
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const setTextFilter = jest.fn();
  const wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
  expect(wrapper).toMatchSnapshot();
});



test('should render ExpenseList with alt data correclty', () => {
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const setTextFilter = jest.fn();
  const wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'rent'
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const setTextFilter = jest.fn();
  const wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
  wrapper.find('input').simulate('change', {
    target: {value}
  });
  expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sortBy Date', () => {
  const value = 'date';
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const setTextFilter = jest.fn();
  const wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled();
});

test('should sortBy Amount', () => {
  const value = 'amount';
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const setTextFilter = jest.fn();
  const wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment().add(4, 'years');
  const endDate = moment().add(8, 'years');
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const setTextFilter = jest.fn();
  const wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});





test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';  
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const setTextFilter = jest.fn();
  const wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendatFocused')).toBE(calendarFocused);
  
});