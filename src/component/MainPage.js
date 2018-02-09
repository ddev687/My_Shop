import React,{Component} from 'react';
import {Text,TextInput,View,ImageBackground,Image,Alert,TouchableWithoutFeedback,WebView,Linking} from 'react-native';
import Button from "./comman/Button";
import Modal from 'react-native-modal';
import {API} from "../config";
import {StackNavigator} from 'react-navigation';

class MainPage extends Component
{
    state = {
        modalVisible:false,
        UserEmail:'',
        UserPassword:'',
        UserName:''
    };

    componentDidMount() {
        Linking.addEventListener('url', this.handleOpenURL);
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    UserLoginFunction = () =>{
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;
        fetch('http://localhost:3000/loginUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: UserEmail,
                password: UserPassword
            })
        }).then((response) => response.json())
            .then((responseJson) => {
            if(responseJson=="Login Successfully"){
                this.setState({modalVisible:false});
                //Alert.alert(responseJson);
                this.props.navigation.navigate("Home");
            }else{
                Alert.alert(responseJson);
            }
            }).catch((error) => {
            console.error(error);
        });
    };

    UserGoogleLogin = () =>{
        //return <WebView source={{uri:'http://localhost:3000/auth/google'}}/>
       Linking.openURL('http://localhost:3000/auth/google');
    }
    UserFacebookLogin=()=>{
        Linking.openURL("http://localhost:3000/auth/facebook");
    }
    UserGithubLogin=()=>{
        Linking.openURL("http://localhost:3000/auth/github");
    }
    UserTwitterLogin=()=>{
        Linking.openURL("http://localhost:3000/auth/twitter");
    }
    closeModal()
    {
        this.setState({modalVisible:false,modalRegisterVisible:false});
    }
    onPressLogin()
    {
        return this.setState({modalVisible:true});
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={Styles.mainViewStyle}>
                <ImageBackground
                    source={require('/Users/lanet/Desktop/React-Native/MyShop/images/BackGround.jpg')}
                    blurRadius={3}
                    style={Styles.backGroundImageStyle}>
                    <Image
                        source={require('/Users/lanet/Desktop/React-Native/MyShop/images/Icon.png')}
                        style={{width:'95%',height:'20%',alignItems:'center',marginTop:'65%'}}
                    />
                    <View style={{flexDirection:'row'}}>
                        <Button onPress={this.onPressLogin.bind(this)} bgColor={style={backgroundColor:'#E91E63'}}>Login</Button>
                        <Button onPress={()=>navigate("Register")} bgColor={style={backgroundColor:'#F44336'}}>Register</Button>
                    </View>
                    <Text style={Styles.textStyle}>Or</Text>
                    <Button onPress={()=>navigate("Home")} bgColor={style={backgroundColor:'gray'}}>Skip</Button>
                    <View style={{width:'100%',flexDirection:'row',height:'68%'}}>
                        <TouchableWithoutFeedback onPress={()=>this.UserFacebookLogin()}>
                            <Image source={require("/Users/lanet/Desktop/React-Native/MyShop/images/loginFB.png")} style={Styles.loginLogoStyle}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.UserGoogleLogin()}>
                            <Image source={require("/Users/lanet/Desktop/React-Native/MyShop/images/loginGoogle.png")} style={Styles.loginLogoStyle}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.UserTwitterLogin()}>
                            <Image source={require("/Users/lanet/Desktop/React-Native/MyShop/images/loginTwitter.png")} style={Styles.loginLogoStyle}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.UserGithubLogin()}>
                            <Image source={require("/Users/lanet/Desktop/React-Native/MyShop/images/loginGithub.png")} style={Styles.loginLogoStyle}/>
                        </TouchableWithoutFeedback>
                    </View>

                    <View>
                        {/*Login Modal*/}
                        <Modal isVisible={this.state.modalVisible}
                            supportedOrientations={['portrait','landscape']}
                        transparent={true} style={Styles.modalStyle}>
                                  <View style={{marginTop:'-25%'}}>
                                      <TouchableWithoutFeedback onPress={()=>this.closeModal()}>
                                          <View><Text style={{fontSize:25,textAlign:'right',marginTop:'-15%',marginRight:'2%'}}>X</Text></View>
                                      </TouchableWithoutFeedback>
                                      <Image
                                          source={require('/Users/lanet/Desktop/React-Native/MyShop/images/Icon.png')}
                                          style={{width:'50%',height:'30%',alignItems:'center',marginLeft:'25%',marginBottom:5}}
                                      />
                                      <View style={Styles.inputViewStyle}>
                                          <TextInput
                                              placeholder="Enter Email"
                                              value={this.state.UserEmail}
                                              onChangeText={(UserEmail)=>this.setState({UserEmail})}
                                              style={Styles.inputStyle}
                                              autoCorrect={false}
                                          />
                                          <TextInput
                                              placeholder="Enter Password"
                                              secureTextEntry
                                              value={this.state.UserPassword}
                                              onChangeText={(UserPassword)=>this.setState({UserPassword})}
                                              style={Styles.inputStyle}
                                          />
                                          <Button onPress={()=>this.UserLoginFunction()} bgColor={style={backgroundColor:'#3D5AFE',marginTop:'5%',width:'100%'}}> Login </Button>
                                      </View>
                                  </View>
                            </Modal>
                        {/*End Login Modal*/}
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const Styles= {
    modalStyle: {
        position: 'absolute',
        top: '25%',
        left: 0,
        right: 0,
        bottom: 0,
        width: '90%',
        height: '50%',
        margin: '5%',
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    mainViewStyle: {
        flex: 1,
    },
    inputStyle:{
        marginRight:5,
        marginLeft:5,
        borderWidth:2,
        borderColor:'black',
        borderRadius:15,
        fontSize:25,
        width:'90%',
        paddingLeft:10,
        lineHeight:30,
        marginTop:'3%',
        color:'#000',
    },
    inputViewStyle:{
        height:200,
        width:'100%',
        flexDirection:'column',
        flex:1,
        alignItems:'center'
    },
    backGroundImageStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 30
    },
    loginLogoView:{
        flexDirection:'row',
        justifyContent:'center'
    },
    loginLogoStyle:{
        height:'11%',
        width:'16%',
        marginLeft:'7%',
        marginTop:'20%'
    }
}
export default MainPage;