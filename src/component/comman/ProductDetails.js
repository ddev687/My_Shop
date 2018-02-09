import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TextInput} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import { PricingCard } from 'react-native-elements';

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
        if(this.props.navigation.state.params.product.Product_Stock >= 0){
            return <Text style={{fontSize:20,marginTop:'3%',marginRight:'2%'}}>In Stock</Text>
        }else{
            return <Text>Outof Stock</Text>
        }
    }
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
                            title='Free'
                            price='$0'
                            info={['1 User', 'Basic Support', 'All Core Features']}
                            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                        />
                        <Text style={Styles.productNameStyle}>Rs.{this.props.navigation.state.params.product.Product_Price}</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={Styles.productDescriptionStyle}>{this.props.navigation.state.params.product.Product_Description}</Text>
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=>{this.addToCart()}} bgColor={style={backgroundColor:'#673AB7'}}>Add to Cart</Button>
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