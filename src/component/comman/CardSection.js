import React from 'react';
import {Text,View} from 'react-native';

const CardSection=(props)=>{
    return(
        <View style={Styles.containerStyle}>
            {props.children}
        </View>
    );
};

const Styles={
    containerStyle:{
        borderBottomWidth:1,
        backgroundColor:'#fff',
        flexDirection:'row',
        position:'relative',
        borderColor:'#ddd'
    }
}

export default CardSection;