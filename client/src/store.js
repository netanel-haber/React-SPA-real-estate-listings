import { createStore } from 'redux';

let initialState = [];
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};


export default createStore(reducer);