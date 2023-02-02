import axios from 'axios'
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFav = (char) => {
  return async function (dispatch) {
    const result = await axios(`https://rickandmortyapi.com/api/character/${char}`)
    const api = result.data
    return dispatch({ type: ADD_FAV, payload: api })
      // .then(data => dispatch({ type: ADD_FAV, payload: data }))
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