import React,{Component} from 'react';
import {View,Text,ScrollView,Button,Navigator,Dimensions,TouchableHighlight,Image} from 'react-native';
import API from '../config';
import {Tile} from 'react-native-elements';
import Header from './comman/Header';
import Slider from './comman/Slider';
import ProductList from "./comman/ProductList";
import Card from "./comman/Card";
import CardSection from "./comman/CardSection";

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state={category:[],loading:false};
    }
    async getData()
    {
        var promise=await new Promise((resolve,reject)=>{
            fetch(`${API}getCategory`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson);
                }).catch((error) => {
                alert(error);
                reject(error);
            });
        });
        return promise;
    }
    async componentWillMount()
    {
        this.setState({ loading: true });
        await this.getData().then((category)=>{
            this.setState({
                loading:false,
                category
            })
        })
    }
    showProduct(category)
    {
        this.props.navigation.navigate("ProductList",{product});
        /*this.props.onPress(product);*/
    }
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
    onItemPress = (product) => {
        this.props.navigation.navigate('ProductDetails',{product})
    }
    renderCategory = (category) => {
        return category.map((category,index) => {
            return(
                <TouchableHighlight onPress={() => {
                    this.showProduct(category)
                }} key={index}>
                    <View style={Styles.productBoxStyle}>
                        <Tile
                        imageSrc={{uri:category.Category_Image}}
                        title={category.Category_Name}
                        featured
                        caption={category.Category_Description}
                        />
                    </View>
                </TouchableHighlight>
            );
        });
    }
    render(){
        if (this.state.loading) {
            return <View><Slider/><Text>Loading...</Text></View>
        }
        var {category}=this.state;
        return(
            <ScrollView>
                <Slider/>
            <View style={Styles.productViewStyle}>
                {
                    this.renderCategory(category)
                }
            </View>
            </ScrollView>
        );
    }
}

const Styles={
    productBoxStyle:{
        borderWidth:2,
        borderColor:'#000',
        marginTop:'2%'
        /*margin:2,
        width:Dimensions.get('window').width/1,
        height:Dimensions.get('window').height/3,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'*/
    },
    productViewStyle:{
        /*flexWrap:'wrap',
        flexDirection:'row',
        flex:1,
        padding:2*/
    }
}

export default Home;