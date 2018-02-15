import React,{Component} from 'react';
import {View,Text,ScrollView,Button,Navigator,Dimensions,TouchableHighlight,ImageBackground} from 'react-native';
import API from '../../config';
import {Tile} from 'react-native-elements';
import Header from './Header';
import Slider from './Slider';
import OnClick from "./OnClick";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class CategoryList extends Component
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
    showProductSubcategory(category)
    {
        this.props.navigation.navigate('SubcategoryList',{category});
        //this.props.onPress(category);
    }

    renderCategory = (category) => {
        return category.map((category,index) => {
            return(
                <OnClick onPress={() => {
                    this.showProductSubcategory(category)
                }} key={index}>
                    <View style={Styles.productBoxStyle}>
                        <ImageBackground
                            source={{uri:category.Category_Image}}
                            //resizeMode={'contain'}
                            style={{height:responsiveHeight(30),width:responsiveWidth(96),margin:10}}>
                            <View style={{justifyContent:'center',backgroundColor:'#fff',opacity:0.9,alignItems:'center'}}>
                                <Text style={{fontSize:responsiveFontSize(5)}}>{category.Category_Name}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </OnClick>
            );
        });
    }
    render(){
        if (this.state.loading) {
            return <Text>Loading...</Text>
        }
        var {category}=this.state;
        return(
            <View style={Styles.productViewStyle}>
                {
                    this.renderCategory(category)
                }
            </View>
        );
    }
}

const Styles={
    productBoxStyle:{
        borderWidth:responsiveWidth(0.5),
        height:responsiveHeight(35),
        borderColor:'#000',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:responsiveHeight(2)
    },
    productViewStyle:{
        //marginTop:responsiveHeight(7.5)
    }
}

export default CategoryList;