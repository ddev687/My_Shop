import React,{Component} from 'react';
import {View,Text,Image,Dimensions,TouchableHighlight} from 'react-native';
import API from '../../config';
import OnClick from "./OnClick";

class Category extends Component
{
    constructor(props)
    {
        super(props);
        this.state={category:[],subcategory:[],loading:false,showSubcategory:false};
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
        this.props.navigation.navigate('ProductList',{category});
        //this.props.onPress(category);
    }
    async getSubcategory(id)
    {
        var promise=await new Promise((resolve,reject)=>{
        fetch(`${API}getSubcategory`, {
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

    renderCategory = (category) => {
        return category.map((category,index) => {
            return(
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:'2%'}} key={index}>
                    <Text style={Styles.categoryStyle}>{category.Category_Name}</Text>
                    <OnClick onPress={this.getSubcategory(category._id)}><Text style={Styles.categoryStyle}>+</Text></OnClick>
                </View>
            );
        });
    }
    renderSubcategory(subcategory)
    {
        if(this.state.showSubcategory){
            return subcategory.map((subcategory,index) => {
                return(
                    <TouchableHighlight onPress={() => {
                        this.showProduct(subcategory)
                    }} key={index}>
                        <View style={Styles.productBoxStyle}>
                            <Image
                                source={{uri:subcategory.Subcategory_Image}}
                                style={{height:100,width:150,margin:10}}
                            />
                            <Text>{subcategory.Subcategory_Name}</Text>
                        </View>
                    </TouchableHighlight>
                );
            });
        }
    }
    render(){
        if (this.state.loading) {
            return <Text>Loading...</Text>
        }
        var {category,subcategory}=this.state;
        return(
            <View>
                <View style={Styles.categoryViewStyle}>
                    {
                        this.renderCategory(category)
                    }
                </View>
                <View>
                    {
                        this.renderSubcategory(subcategory)
                    }
                </View>
            </View>
        );
    }
}

const Styles={
    categoryViewStyle:{
        borderColor:'#000',
        borderWidth:1,
        flexDirection:'column',
        backgroundColor:'gray',
    },
    categoryStyle:{
        borderColor:'#000',
        fontSize:20
    },
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

export default Category;