import React from 'react';
import {Text,View,Image} from 'react-native';
//import FontAwesome, { Icons } from 'react-native-fontawesome';


const Header=({headerText})=>{
    return(
        <View style={Styles.headerViewStyle}>
            <Image source={require('/Users/lanet/Desktop/React-Native/MyShop/images/Icon.png')}
            style={{height:'90%',marginTop:5}}/>
        </View>
    );
}

const Styles={
    headerViewStyle:{
        height:50,
        backgroundColor:'#fff',
        justifyContent:'space-between'
    },
    headerTextStyle:{

    }
}
export default Header;