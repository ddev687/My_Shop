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
                        <Image
                            source={{uri:category.Category_Image}}
                            style={{height:100,width:150,margin:10}}
                        />
                        <Text>{category.Category_Name}</Text>
                    </View>
                </OnClick>
                /*<TouchableHighlight onPress={() => {
                   alert("asdsd")
                }} key={index}>
                    <View style={Styles.productBoxStyle}>
                            <Tile
                                imageSrc={{uri:category.Category_Image}}
                                title={category.Category_Name}
                                featured
                                caption={category.Category_Description}
                            />
                    </View>
                </TouchableHighlight>*/
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
        borderWidth:2,
        borderColor:'#000',
        marginTop:'2%'
    }
}

export default CategoryList;