// Store
const store = {
    state: { count: 0 },
    reducer(state, action) {
      switch (action.type) { 
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    },
    dispatch(action) {
      this.state = this.reducer(this.state, action);
    }
  };
  
  // Actions
  const increment = { type: 'INCREMENT' };
  const decrement = { type: 'DECREMENT' };
  
  // Dispatch actions
  store.dispatch(increment);
  console.log(store.state); // { count: 1 }
  store.dispatch(decrement);
  console.log(store.state); // { count: 0 }