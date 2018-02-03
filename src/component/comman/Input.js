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
   /*inputStyle:{
       width:'90%',
       height:'15%',
       borderColor:'black',
       paddingLeft:10,
       borderWidth:1,
       borderRadius:5,
       marginBottom:10,
       borderRadius:30,
       color:'#000',
       padding:15,
       margin:15
    },
    viewStyle:{
        height:40,
        flexDirection:'row',
        flex:1,
        marginBottom:30,
        alignItems:'center'
    },*/
    inputStyle:{
         marginRight:5,
         marginLeft:5,
         flex:2,
         borderWidth:2,
         borderColor:'black',
         fontSize:20,
         lineHeight:25,
         color:'#000',
    },
    viewStyle:{
         height:40,
         flexDirection:'row',
         flex:1,
         alignItems:'center'
    }
}
