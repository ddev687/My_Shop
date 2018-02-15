import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions,StatusBar,Button} from 'react-native';
//import SearchBar from 'react-native-searchbar';
import { SearchBar } from 'react-native-elements'

const DEVICE_WIDTH = Dimensions.get(`window`).width;

class Search extends Component
{
    constructor(props){
        super(props);
        this.state={results:''};
    }
    render(){
        return(
            <View>
                <SearchBar
                    lightTheme
                    showLoading={"true"}
                    inputStyle={{backgroundColor:'#fff'}}
                    cancelButtonTitle="Cancel"
                    containerStyle={{backgroundColor:'#fff',width:'90%',marginRight:'4%',marginLeft:'4%',margin:'1%'}}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Search Product' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff'
    }
});

export default Search