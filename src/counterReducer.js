//reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'REMOVE':
      return state - 1;
    case 'ADD_10':
      return state + 10;
    case 'REMOVE_10':
      return state - 10;
    case 'RESET':
      return state = 0;
    default:
      return state;
  }
};
export default counterReducer;