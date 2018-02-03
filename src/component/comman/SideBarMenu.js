import React,{Component} from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from '../Home';
//import FirstScreen from '../FisrtScreen';
import SecondScreen from '../SecondScreen';

/*const SideBarMenu=DrawerNavigator({
    Home:{
        screen:Home
    },
    First:{
        screen:FirstScreen
    },
    Second:{
        screen:SecondScreen
    }
},{
    initialRouteName:'Home',
    drawerPosition:'left',
    contentOptions:{
        activeTintColor:'red',
    }
})*/
const SideBarMenu=DrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        SecondScreen: {
            screen: SecondScreen,
        }
    },
{
    initialRouteName:'Home',
    contentOption:
    {
        activeTintColor:'red'
    }

});

export default SideBarMenu;