import {Platform,Dimensions} from 'react-native';

const API = Platform.OS === 'android'
    ? 'http://127.0.0.1:3000/'
    : 'http://localhost:3000/';


export default API
