import API from '../config';
import axios from 'axios';

export const apiMiddleware = store => next => action => {
    // Pass all actions through by default
    next(action);
    switch (action.type) {
        // In case we receive an action to send an API request
         case 'GET_PRODUCT_DATA':
            // Dispatch GET_MOVIE_DATA_LOADING to update loading state
            store.dispatch({type: 'GET_PRODUCT_DATA_LOADING'});
            // Make API call and dispatch appropriate actions when done
            axios.get(`${API}getProduct`)
            .then((response)=>response.json())
            .then((responseJson)=>{
                next({
                    type:'GET_PRODUCT_DATA_RECEIVED',
                    responseJson
                })
            })
            .catch((e)=>next({
                type:'GET_PRODUCT_DATA_ERROR',
                e
            }));
            break;
        // Do nothing if the action does not interest us
        default:
            break;
    }
};

export const reducer = (state = { product: [], loading: true }, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_DATA_LOADING':
            return {
                ...state,                   // keep the existing state,
                loading: true,              // but change loading to true
            };
        case 'GET_PRODUCT_DATA_RECEIVED':
            return {
                loading: false,             // set loading to false
                product: action.data.product, // update movies array with reponse data
            };
        case 'GET_PRODUCT_DATA_ERROR':
            return state;
        default:
            return state;
    }
};
