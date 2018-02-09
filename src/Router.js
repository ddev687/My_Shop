import React,{Component} from 'react';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import Register from '../src/component/Register';
import Home from '../src/component/Home';
import MainPage from '../src/component/MainPage';
import ProductDetails from '../src/component/comman/ProductDetails';
import ProductList from '../src/component/comman/ProductList';
import OnClick from '../src/component/comman/OnClick';

/*
this.state={Category:[],loading:false};
//alert(this.state.Category);

async function getCategory() {
    var promise=await new Promise((resolve,reject)=>{
        fetch('http://localhost:3000/getCategory', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
            //alert(responseJson);
                resolve(responseJson);
            }).catch((error) => {
            alert(error);
            reject(error);
        });
    });
    return promise;
}
*/

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
    },
    ProductList:{
        screen:ProductList,
        navigationOptions:{
            headerTitle:"My Shop",
            gesturesEnabled: false,
        }
    },
    ProductDetails:{
        screen:ProductDetails,
        navigationOptions:{
            headerTitle:"My Shop",
            gesturesEnabled: false,
        },
    }
},{
    navigationOptions:{
        initialPage:'MainPage',
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
const SideBarMenu=DrawerNavigator({
    Home: {
        screen: Router
    }
});

export default SideBarMenu;