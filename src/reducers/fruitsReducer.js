const initialState = {
    fruitsList: []
};
function fruitsReducer(state = initialState, action) {
     
    switch (action.type) {
        case 'ADD_FRUITS':
            return { ...state, fruitsList:[...state.fruitsList, action.payload] }
        case 'DELETE_FRUITS':
              return {...state, fruitsList:state.fruitsList.filter((fruit)=>fruit !== action.payload)};
          default:          
        return state;
    }
  };
  export default fruitsReducer;