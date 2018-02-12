import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TextInput} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import { PricingCard } from 'react-native-elements';
import Stars from 'react-native-stars-rating';

var tmp=[];
class ProductDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state={cart:[]};
    }
    renderStock()
    {
        if(this.props.navigation.state.params.product.Product_Stock > 0){
            return <Text style={{fontSize:20,marginTop:'3%',marginRight:'2%'}}>In Stock</Text>
        }else{
            return <Text style={{fontSize:20,marginTop:'3%',marginRight:'2%'}}>Outof Stock</Text>
        }
    }
    /*async getData()
    {
        var promise=await new Promise((resolve,reject)=>{
            fetch(`${API}checkOrder?productId=${this.props.navigation.state.params.product._id}`, {
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
    async componentDidMount(){
        this.setState({ loading: true });
        await this.getData().then((rating)=>{
            this.setState({
                loading:false,
                rating
            })
        })
    }*/
    addToCart()
    {
        tmp.push(this.props.navigation.state.params.product._id);
        this.setState({cart:tmp})
    }
    render(){
        return(
            <ScrollView>
                <View style={{flex:1}}>
                <Card>
                    <CardSection>
                        <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                        <Text style={Styles.productNameStyle}>{this.props.navigation.state.params.product.Product_Name}</Text>
                            {this.renderStock()}
                            </View>
                    </CardSection>
                    <CardSection>
                        <Image
                            source={{uri:this.props.navigation.state.params.product.Product_Image}}
                            style={{height:400,width:'96%',margin:'2%'}}/>
                    </CardSection>
                    <CardSection>
                        <PricingCard
                            color='#4f9deb'
                            title={this.props.navigation.state.params.product.Product_Company}
                            price={'Rs : '+this.props.navigation.state.params.product.Product_Price}
                            info={['User Rating', 'Basic Support', 'All Core Features']}
                            button={{ title: 'Add To Cart', icon: 'add-shopping-cart' }}
                            containerStyle={{width:'96%',margin:'2%'}}
                        />
                        {/*<Text style={Styles.productNameStyle}>Rs.{this.props.navigation.state.params.product.Product_Price}</Text>*/}
                    </CardSection>
                    <CardSection>
                        <Text style={Styles.productDescriptionStyle}>{this.props.navigation.state.params.product.Product_Description}</Text>
                    </CardSection>
                    <CardSection>
                        <Stars
                            isActive={true}
                            rateMax={5}
                            isHalfStarEnabled={false}
                            onStarPress={(rating) => console.log(rating)}
                            rate={3}
                            size={60}
                        />
                    </CardSection>
                </Card>
                </View>
            </ScrollView>
        );
    }
}

const Styles={
    productNameStyle:{
        fontSize:30,
        color:'black',
        marginLeft:'2%'
    },
    productDescriptionStyle:{
        fontSize:20,
        color:'black',
        marginLeft:'2%'
    }
}

export default ProductDetails;