import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import configureStore from './store/store';
import 'normalize.css/';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 56}))
store.dispatch(addExpense({description: 'Gas bill', createdAt: 100}))
store.dispatch(addExpense({description: 'rent', amount: 1256}))


const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));