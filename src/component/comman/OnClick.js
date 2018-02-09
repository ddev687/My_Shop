import React,{Component} from 'react';
import {View,TouchableHighlight} from 'react-native';

const OnClick=({onPress,children})=>{
    return(
        <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>);
};

export default OnClick;