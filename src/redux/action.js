export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';


export const addFav = (char) => {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/${char}`)
      .then(data => data.json())
      .then(data => dispatch({ type: ADD_FAV, payload: data }))
  }
  // return {
  //   type: ADD_FAV,
  //   payload: char
  // }
}

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id
  }
}

export const filterCard = (status) => {
  return {
    type: FILTER,
    payload: status
  }
}

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id
  }
}