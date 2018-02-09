import React from 'react';
import {View,TextInput} from 'react-native';


export default Input=({value,onChangeText,placeholder,secureTextEntry})=>{
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
        margin:'2%',
        borderWidth:2,
        borderColor:'black',
        borderRadius:15,
        fontSize:25,
        width:'95%',
        lineHeight:30,
        paddingLeft:'3%',
        marginTop:'3%',
        color:'#000',
    },
    inputViewStyle:{
        height:200,
        width:'100%',
        flexDirection:'column',
        flex:1,
        margin:'5%',
        alignItems:'center'
    }
}
