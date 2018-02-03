import React from 'react';
import {Text,View,Button} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';

class SecondScreen extends React.Component
{
    static navigationOptions={
        tabBarLabel:'Screen 2',
        /*drawerIcon:(tintColor)=>{
            return(
                <MatrialIcons
                    name="menu"
                    size={50}
                    style={{color:tintColor}}>
                </MatrialIcons>
            );
        }*/
    };
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30,color:'blue'}}>Screen 2</Text>
                {/*<Button onPress={this.props.navigation.navigate('DrawerOpen')} title="Click"/>*/}
            </View>
        );
    }
}

export default SecondScreen;