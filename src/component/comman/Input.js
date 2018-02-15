import React from 'react';
import {View,TextInput} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


const Input=({value,onChangeText,placeholder,secureTextEntry})=>{
    return(
        <View style={Styles.viewStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={Styles.inputStyle}
                onChangeText={onChangeText}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}/>
        </View>
    );
}

const Styles={
    inputStyle:{
        margin:responsiveHeight(2),
        borderWidth:responsiveWidth(0.5),
        borderColor:'black',
        fontSize:responsiveFontSize(4),
        lineHeight:responsiveHeight(4),
        width:responsiveWidth(94),
        paddingLeft:responsiveWidth(2),
        marginTop:responsiveHeight(2),
        color:'#000',
    },
    inputViewStyle:{
        height:responsiveHeight(10),
        width:responsiveWidth(90),
        flexDirection:'column',
        flex:1,
        alignItems:'center'
    }
}

export default Input;
