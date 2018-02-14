import React,{Component} from 'react';
import {ScrollView,Dimensions,View,Image,Text} from 'react-native';
import Slider from './comman/Slider';
import CategoryList from "./comman/CategoryList";
import API from '../config';
import ProductList from "./comman/ProductList";
import OnClick from "./comman/OnClick";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class Home extends Component
{
    constructor(props)
    {
        super(props);
        //this.state={product:[],loading:false,limit:10};
    }
    /*async getData()
    {
        var promise=await new Promise((resolve,reject)=>{
            fetch(`${API}getProduct?limit=${this.state.limit}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
                .then((responseJson) => {
                    debugger
                    resolve(responseJson);
                }).catch((error) => {
                alert(error);
                reject(error);
            });
        });
        return promise;
    }*/
    /*async componentWillMount()
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
                            style={{height:responsiveHeight(35),width:responsiveWidth(45),margin:10}}
                        />
                        <View style={{height:responsiveHeight(10)}}>
                            <Text style={{fontSize:responsiveFontSize(4)}}>{product.Product_Name}</Text>
                        </View>
                    </View>
                </OnClick>
            );
        });
    }*/
    /*onPress(category){
        this.props.navigation.navigate('ProductDetails',{category})
    }*/
    async _renderPage()
    {
        //alert("fdfdf");
        /*this.setState({ loading: true,limit:this.state.limit+10});*/
        <ProductList/>
        /*await this.getData().then((product)=>{
            this.setState({
                loading:false,
                product
            });
        })*/
    }
    render(){
        return(
            <ScrollView onScroll={(e)=>{
                var windowHeight = Dimensions.get('window').height,
                    height = e.nativeEvent.contentSize.height,
                    offset = e.nativeEvent.contentOffset.y;
                if( windowHeight + offset >= height ){
                    this._renderPage();
                }
            }}>
                <Slider/>
                <CategoryList {...this.props}/>
                <ScrollView horizontal={true}>
                    <ProductList {...this.props}/>
                </ScrollView>
                <ProductList/>
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

export default Home;