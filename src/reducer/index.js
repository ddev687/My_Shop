import {combineReducers} from 'redux';
import ProductReducer from './ProductReducer';
import ProductSelectionReducer from './ProductSelectionReducer';

export default combineReducers({
    products:ProductReducer,
    selectedProductId:ProductSelectionReducer
});