import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';


const Button=({onPress,children,bgColor})=>{
    return(
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={[Styles.buttonStyle,bgColor]}>
                <Text style={Styles.buttonTextStyle}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
};

const Styles={
    buttonStyle:{
        borderWidth:2,
        borderColor:'#fff',
        borderRadius:20,
        padding:10,
        minWidth:'35%',
        alignItems:'center',
        marginTop:'5%'
    },
    buttonTextStyle:{
        fontSize:20,
        color:'#fff',
    }
}

export default Button;