import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


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
        borderWidth:responsiveWidth(0.5),
        borderColor:'#000',
        borderRadius:responsiveHeight(5),
        padding:responsiveHeight(1.5),
        minWidth:responsiveWidth(40),
        alignItems:'center',
        marginTop:responsiveHeight(2),
        marginLeft:responsiveWidth(4),
        marginRight:responsiveWidth(4)
    },
    buttonTextStyle:{
        fontSize:responsiveFontSize(2.5),
        color:'#fff',
    }
}

export default Button;