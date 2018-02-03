import React,{Component} from 'react';
import {View,Text,ScrollView,Button,Navigator} from 'react-native';
import Header from './comman/Header';
import Slider from './comman/Slider';
import ProductList from "./comman/ProductList";

class Home extends Component
{
    static navigationOptions={
        tabBarLabel:'Home',
        tabBarIcon:(tintColor)=>{
            return(
               {/* <MatrialIcon
                    name="menu"
                    size={50}
                    style={{color:tintColor}}>
                </MatrialIcon>*/}
            );
        }
    };
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Slider/>
                <ScrollView>
                    <ProductList/>
                </ScrollView>
            </View>
        );
    }
}

export default Home;