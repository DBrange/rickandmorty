import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      }
    case REMOVE_FAV:
      let filter = state.myFavorites.filter(fav => fav.id !== action.payload)
      return {
        ...state,
        myFavorites: filter

      }
    case FILTER:
      return {
        ...state,
        
      }
    default:
      return {...state}
  }
} 

export default reducer;