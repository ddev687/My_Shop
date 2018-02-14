import React,{Component} from 'react';
import {View,Text,Image,Dimensions,Alert,TouchableHighlight,ScrollView} from 'react-native';
import OnClick from "./OnClick";
import API from '../../config';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import axios from 'axios';

class ProductList extends Component
{
    constructor(props)
    {
        super(props);
        this.state={product:[],loading:false,limit:10};
    }
    async getData()
    {
        /*var url="";
        if(!this.props.navigation.state.params==null){
            subcategoryId=this.props.navigation.state.params.subcategory._id;
            url=API+`getProduct?subcategoryId=${subcategoryId}`;
            alert(url);
        }else{*/
            limit=this.state.limit+this.props.limit;
            this.setState({state:limit});
            url=API+`getProduct?limit=${this.state.limit}`;
            //alert(this.props.limit);
        //}
        //alert(url);
        var promise=await new Promise((resolve,reject)=>{
            fetch(`${url}`, {
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
        this.setState({ loading: true });
        await this.getData().then((product)=>{
            this.setState({
                loading:false,
                product
            })
        })
    }
    async _renderPage()
    {
        this.setState({ loading: true,limit:this.state.limit+10});
        await this.getData().then((product)=>{
            this.setState({
                loading:false,
                product
            });
        })
    }
    showProduct(product)
    {
        this.props.navigation.navigate("ProductDetails",{product});
    }
    renderProducts = (product) => {
        return product.map((product,index) => {
            return(
                <OnClick onPress={() => {
                    this.showProduct(product)
                }} key={index}>
                    <View style={Styles.productBoxStyle}>
                        <Image
                            source={{uri:product.Product_Image}}
                            style={{height:responsiveHeight(35),width:responsiveWidth(45),margin:10}}
                        />
                        <View style={{height:responsiveHeight(10)}}>
                            <Text style={{fontSize:responsiveFontSize(4)}}>{product.Product_Name}</Text>
                        </View>
                    </View>
                </OnClick>
            );
        });
    }
    /*constructor(props)
    {
        super(props);
        this.state={product:[],loading:false};
    }
    async getData()
    {
        subcategoryId=this.props.navigation.state.params.subcategory._id;
        var promise=await new Promise((resolve,reject)=>{
            fetch(`${API}getProduct?subcategoryId=${subcategoryId}`, {
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
        this.setState({ loading: true });
        await this.getData().then((product)=>{
            this.setState({
                loading:false,
                product
            })
        })
    }

    renderProducts = (product) => {
        return product.map((product,index) => {
            return(
                <OnClick onPress={() => {
                    this.showProduct(product)
                }} key={index}>
                    <View style={Styles.productBoxStyle}>
                        <Image
                            source={{uri:product.Product_Image}}
                            style={{height:100,width:150,margin:10}}
                        />
                        <Text>{product.Product_Name}</Text>
                    </View>
                </OnClick>
            );
        });
    }*/
    render(){
        if (this.state.loading) {
            return <Text>Loading...</Text>
        }
        var {product}=this.state;
        return(
            <ScrollView onScroll={(e)=>{
                var windowHeight = Dimensions.get('window').height,
                    height = e.nativeEvent.contentSize.height,
                    offset = e.nativeEvent.contentOffset.y;
                if( windowHeight + offset >= height ){
                    this._renderPage();
                }
            }}>
                <View style={Styles.productViewStyle}>
                    {
                        this.renderProducts(product)
                    }
                </View>
            </ScrollView>
        );
    }
}

const Styles={
    productBoxStyle:{
        margin:responsiveHeight(0.2),
        width:Dimensions.get('window').width/2 -6,
        height:responsiveHeight(50),
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    productViewStyle:{
        flexWrap:'wrap',
        flexDirection:'row',
        flex:1
    }
}

/*const Styles={
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
}*/

export default ProductList;