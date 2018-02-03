import React,{Component} from 'react';
import {View,Text,Image,Dimensions,Alert,TouchableHighlight} from 'react-native';

class ProductList extends Component
{
    constructor(props)
    {
        super(props);
        this.state={Product_Image:[],Product_Name:[],loading:false};
    }
    getData()
    {
        var promise=new Promise((resolve,reject)=>{
            const pname=[],pimage=[];
            fetch('http://localhost:3000/getProduct', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
                .then((responseJson) => {
                    responseJson.forEach((d)=>{
                        pimage.push(d.Product_Image);
                        pname.push(d.Product_Name);
                    });
                    this.setState({Product_Image:pimage,Product_Name:pname});
                    resolve();
                    //this.setState({Product_Name:pname});
                    //alert(this.state.Product_Name);
                    //alert(this.state.Product_Image);
                }).catch((error) => {
                alert(error);
                reject(error);
            });
        });
        return promise;
    }
    componentWillMount()
    {
        this.setState({ loading: true });
        this.getData().then(()=>{
            this.setState({
                loading:false,
            })
        })
    }
    renderProducts = (Product_Name,Product_Image) => {
        //alert("Name : "+Product_Name);
        //alert("Image : "+Product_Image);
        //alert(Product_Image);
        //alert("Image:"+Product_Image)
            //  for(let i=0;i>Product_Name.length();i++)
            Product_Name.map((product,index) => {
                return(
                    <View style={Styles.productBoxStyle}>
                        {/*<TouchableHighlight>
                            <Image
                                source={{uri:Product_Image}}
                                style={{height:100,width:150,margin:10, backgroundColor:'red'}}
                            />
                        </TouchableHighlight>*/}
                        <Text>{this.state.Product_Name}</Text>
                    </View>
                );
            })

    }
    render(){
        if (this.state.loading) {
            console.log('This happens 4th - when waiting for data.');
            return <Text>Loading...</Text>
        }
        var {Product_Image,Product_Name}=this.state;
        return(
            <View style={Styles.productViewStyle}>
                {
                    //this.renderProducts(Product_Name,Product_Image)
                    Product_Name.map((product,index) => {
                        return(
                            <View style={Styles.productBoxStyle}>
                                <TouchableHighlight>
                                    <Image
                                        key={index}
                                        source={{uri:JSON.stringify(Product_Image)}}
                                        style={{height:100,width:150,margin:10, backgroundColor:'red'}}
                                    />
                                </TouchableHighlight>
                                <Text>{this.state.Product_Name}</Text>
                            </View>
                        );
                    })
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