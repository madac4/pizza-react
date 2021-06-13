import axios from 'axios';

export const setLoaded = payload => ({
    type: "SET_LOADING",
    payload
})


export const fetchPizzas = (sortBy, category) => (dispatch) => {
        dispatch(setLoaded(false))

        axios.get(`https://run.mocky.io/v3/d58511e1-9c31-490c-bb52-c79f7c21b6b4?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setPizzas(data));
    });
}


export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});