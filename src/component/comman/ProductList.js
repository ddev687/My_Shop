import React,{Component} from 'react';
import {View,Text,Image,Dimensions,Alert,TouchableHighlight} from 'react-native';
import OnClick from "./OnClick";
import API from '../../config';
import axios from 'axios';
class ProductList extends Component
{
    constructor(props)
    {
        super(props);
        this.state={product:[],loading:false};
    }
    async getData()
    {
        var promise=await new Promise((resolve,reject)=>{
            fetch(`${API}getProduct`, {
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
        await this.getData().then((product)=>{
            this.setState({
                loading:false,
                product
            })
        })
    }
    showProduct(product)
    {
        /*this.props.navigation.navigate("ProductDetails",{product});*/
        this.props.onPress(product);
    }
    renderProducts = (product) => {
        return product.map((product,index) => {
            return(
                <TouchableHighlight onPress={() => {
                    this.showProduct(product)
                }} key={index}>
                    <View style={Styles.productBoxStyle}>
                        <Image
                            source={{uri:product.Product_Image}}
                            style={{height:100,width:150,margin:10}}
                        />
                        <Text>{product.Product_Name}</Text>
                    </View>
                </TouchableHighlight>
            );
        });
    }
    render(){
        if (this.state.loading) {
            return <Text>Loading...</Text>
        }
        var {product}=this.state;
        return(
            <View style={Styles.productViewStyle}>
                {
                    this.renderProducts(product)
                }
            </View>
        );
    }
}

const Styles={
    productBoxStyle:{
        margin:2,
        width:Dimensions.get('window').width/2 -6,
        height:150,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    productViewStyle:{
        flexWrap:'wrap',
        flexDirection:'row',
        flex:1,
        padding:2
    }
}

export default ProductList;