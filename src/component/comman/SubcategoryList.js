import React,{Component} from 'react';
import {View,Text,ScrollView,Button,Navigator,Dimensions,TouchableHighlight,Image} from 'react-native';
import API from '../../config';
import {Tile} from 'react-native-elements';
import Header from './Header';
import Slider from './Slider';
import OnClick from "./OnClick";

class CategoryList extends Component
{
    constructor(props)
    {
        super(props);
        this.state={subcategory:[],product:[],loadingSubcategory:false,loadingProduct:false};
    }
    async getSubcategory()
    {
        categoryId=this.props.navigation.state.params.category._id;
        var promise=await new Promise((resolve,reject)=>{
            fetch(`${API}getSubCategory?categoryId=${categoryId}`, {
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
    async componentDidMount()
    {
        this.setState({ loadingSubcategory: true });
        this.setState({ loadingProduct: true });
        await this.getSubcategory().then((subcategory)=>{
            this.setState({
                loadingSubcategory:false,
                subcategory
            })
        });
    }
    showProduct(subcategory)
    {
        this.props.navigation.navigate('ProductList',{subcategory});
    }
    renderSubcategory(subcategory)
    {
        return subcategory.map((subcategory,index) => {
            return(
                <OnClick onPress={() => {
                    this.showProduct(subcategory)
                }} key={index}>
                    <View style={Styles.productBoxStyle}>
                        <Image
                            source={{uri:subcategory.Subcategory_Image}}
                            style={{height:100,width:150,margin:10}}
                        />
                        <Text>{subcategory.Subcategory_Name}</Text>
                    </View>
                </OnClick>
            );
        });
    }
    render(){
        if (this.state.loadingSubcategory) {
            return <Text>loadingSubcategory...</Text>
        }
        var {subcategory}=this.state;
        return(
            <View style={Styles.productViewStyle}>
                {
                    this.renderSubcategory(subcategory)
                }
            </View>
        );
    }
}

const Styles={
    productBoxStyle:{
        borderWidth:2,
        borderColor:'#000',
        marginTop:'2%'
    }
}

export default CategoryList;