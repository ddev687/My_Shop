import React from 'react';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import Register from '../src/component/Register';
import Home from '../src/component/Home';
import MainPage from '../src/component/MainPage';

const Router = StackNavigator({
    MainPage:{
        screen:MainPage,
        navigationOptions: ({navigation}) => ({
            header: null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        })
    },
    Register:{
        screen:Register,
        navigationOptions:{
            headerTitle:"Register",
            gesturesEnabled: false,
        },
    },
    Home:{
        screen:Home,
        navigationOptions:{
            headerTitle:"My Shop",
            gesturesEnabled: false,
        },
    }
},{
    navigationOptions:{
        initialPage:'MainPage',
        //headerMode: 'screen',
        mode: 'modal',
        headerStyle:{
            backgroundColor:'#B71C1C'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff',
            fontSize:25
        }
    }
});

const SideBarMenu=DrawerNavigator(
    {
        Home: {
            screen: Router
        },
        MainPage:{
            screen:MainPage,
            navigationOptions: ({navigation}) => ({
                drawerLockMode: 'locked-closed'
            })
        }
    });

export default SideBarMenu;