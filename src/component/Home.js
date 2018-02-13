import React,{Component} from 'react';
import {ScrollView,Dimensions,View,Image,Text} from 'react-native';
import Slider from './comman/Slider';
import CategoryList from "./comman/CategoryList";
import API from '../config';
import ProductList from "./comman/ProductList";
import OnClick from "./comman/OnClick";

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state={product:[],loading:false,limit:10};
    }
    async getData()
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
    }
    /*onPress(category){
        this.props.navigation.navigate('ProductDetails',{category})
    }*/
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
    render(){
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
                <Slider/>
                <CategoryList {...this.props}/>
                <ScrollView horizontal={true}>
                    <View style={Styles.productViewStyle}>
                        {
                            this.renderProducts(product)
                        }
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={Styles.productViewStyle}>
                        {
                            this.renderProducts(product)
                        }
                    </View>
                </ScrollView>

            </ScrollView>
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

export default Home;