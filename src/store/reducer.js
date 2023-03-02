
import { ADD_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      const newData = { ...action.data };
      newData.id = state.length + 1;
      return [...state, newData];
    case DELETE_EXPENSE:
      const newStore = state.filter((expenseObj) => {
        if (expenseObj.id !== action.id) return expenseObj;
      });
      return newStore;
    case UPDATE_EXPENSE:
      const updatedData = { ...action.data };
        state.filter((expenseObj) => {
        if (expenseObj.id == action.id) {
          expenseObj.map((expenseObj, i) => ({ ...expenseObj = updatedData[i] }));
        }
      });
      return [...state, updatedData];
    default:
      return state;
  }
};