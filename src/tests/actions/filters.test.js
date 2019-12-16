import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';


test('should generate set startDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set endDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should generate set sortBy amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' })
});

test('should generate set sortBy date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' })
});

test('should generate set text filter date action object default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should generate set text filter date action object params', () => {
  const text = 'rent'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  })
});