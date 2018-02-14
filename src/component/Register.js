import React,{Component} from 'react';
import {View,TouchableWithoutFeedback,Image,Alert} from 'react-native';
import Input from '../component/comman/Input';
import Button from '../component/comman/Button';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class Register extends Component
{
    state = {
        UserEmail:'',
        UserPassword:'',
        UserName:''
    };
    UserRegistrationFunction = () =>{
        const { UserName }  = this.state ;
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;

        fetch(`http://localhost:3000/registerUser`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: UserName,
                email: UserEmail,
                password: UserPassword
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson=="User Register Successfully"){
                    alert(responseJson);
                    this.props.navigation.navigate("MainPage");
                }
            }).catch((error) => {
            console.error(error);
        });
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image
                    resizeMode={'contain'}
                    source={require('/Users/lanet/Desktop/React-Native/MyShop/images/Icon.png')}
                    style={{width:responsiveWidth(100),height:responsiveHeight(25),alignItems:'center',marginTop:responsiveHeight(5)}}
                />
                <Input
                    value={this.state.UserName}
                    placeholder="Enter Name"
                    onChangeText={UserName=>this.setState({UserName})}/>
                <Input
                    placeholder="Enter Email"
                    value={this.state.UserEmail}
                    onChangeText={(UserEmail)=>this.setState({UserEmail})}
                />
                <Input
                    placeholder={"Enter Password"}
                    value={this.state.UserPassword}
                    secureTextEntry
                    onChangeText={(UserPassword)=>this.setState({UserPassword})}
                />
                <Button onPress={this.UserRegistrationFunction.bind(this)} bgColor={style={backgroundColor:'#3D5AFE'}}>Register</Button>
            </View>
        )
    }
}

export default Register;