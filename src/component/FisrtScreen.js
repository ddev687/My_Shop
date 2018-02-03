import React from 'react';
import {Text,View,Button} from 'react-native';

class FirstScreen extends React.Component
{
    static navigationOptions={
        tabBarLabel:'Screen 1',
        tabBarIcon:(tintColor)=>{
            return(
                <MatrialIcon
                    name="menu"
                    size={50}
                    style={{color:tintColor}}>
                </MatrialIcon>
            );
        }
    };
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30,color:'blue'}}>Screen 1</Text>
                {/*<Button onPress={this.props.navigation.navigate('DrawerOpen')} title="Click"/>*/}
            </View>
        );
    }
}

export default FirstScreen;