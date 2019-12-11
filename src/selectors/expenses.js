import moment from "moment";

// Get visible exoenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
    const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());
    // If any of these variables are false, then the element is filtered from the returned array:
    // All three of those need to be true in order for the expense to not be filtered out.
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a ,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export default getVisibleExpenses;