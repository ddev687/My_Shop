import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import FirstScreen from "./FisrtScreen";
import SecondScreen from "./SecondScreen";

const MainScreenNavigation=TabNavigator({
    Tab1:{
        screen:FirstScreen
    },
    Tab2:{
        screen:SecondScreen
    },
},{
    swipeEnabled:true,
    tabBarPosition:'top',
    tabBarOptions:{
        activeTintColor:'red',
        activeBackgroundColor:'blue',
        labelStyle:{
            fontSize:30,
            padding:10
        }
    }
})

export default MainScreenNavigation;