import React,{Component} from 'react';
import {View,TouchableWithoutFeedback,Image} from 'react-native';
import Input from '../component/comman/Input';
import Button from '../component/comman/Button';

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
                Alert.alert(responseJson);
            }).catch((error) => {
            console.error(error);
        });
    }
    render(){
        return(
            <View>
                <Image
                    source={require('/Users/lanet/Desktop/React-Native/MyShop/images/Icon.png')}
                    style={{width:'50%',height:'30%',alignItems:'center',marginLeft:'25%',marginBottom:5}}
                />
                <Input
                    placeholder="Enter Name"
                    value={this.state.UserName}
                    onChangeText={(UserName)=>this.setState({UserName})}
                />
                <Input
                    placeholder="Enter Email"
                    value={this.state.UserEmail}
                    onChangeText={(UserEmail)=>this.setState({UserEmail})}
                />
                <Input
                    placeholder={"Enter Password"}
                    value={this.state.UserPassword}
                    onChangeText={(UserPassword)=>this.setState({UserPassword})}
                />
                <Button onPress={this.UserRegistrationFunction.bind(this)} bgColor={style={backgroundColor:'#3D5AFE'}}>Register</Button>
            </View>
        )
    }
}

export default Register;