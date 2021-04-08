const initialState = {
    vegetablesList: []
};
function vegetablesReducer(state = initialState, action) {
     
    switch (action.type) {
        case 'ADD_VEGETABLES':
             return { ...state, vegetablesList:[...state.vegetablesList, action.payload] }
        case 'DELETE_VEGETABLES':
             return {...state,vegetablesList:state.vegetablesList.filter((vegetable)=>vegetable !== action.payload)};
             
          default:          
        return state;
    }
  };
  export default vegetablesReducer;