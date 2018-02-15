import React,{Component} from 'react';
import {Text,TextInput,View,ImageBackground,Image,Alert,TouchableWithoutFeedback,WebView,Linking,Dimensions,AsyncStorage} from 'react-native';
import Button from "./comman/Button";
import Modal from 'react-native-modal';
import {API} from "../config";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

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
        fetch('http://localhost:3000/loginLocal', {
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
            if(responseJson){
                this.setState({modalVisible:false});
                //Alert.alert(responseJson);
                AsyncStorage.setItem('Token', responseJson);
                this.props.navigation.navigate("Home");
            }else{
                Alert.alert("Email and Password is Wrong.");
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
                    blurRadius={1}
                    style={Styles.backGroundImageStyle}>

                    <Image
                        source={require('/Users/lanet/Desktop/React-Native/MyShop/images/Icon.png')}
                        resizeMode={'contain'}
                        style={{width:Dimensions.get('window').width,height:responsiveHeight(25),alignItems:'center',marginTop:responsiveHeight(25)}}
                    />

                    <View style={{flexDirection:'row'}}>
                        <Button onPress={this.onPressLogin.bind(this)} bgColor={style={backgroundColor:'#E91E63'}}>Login</Button>
                        <Button onPress={()=>navigate("Register")} bgColor={style={backgroundColor:'#F44336'}}>Register</Button>
                    </View>
                    <Text style={Styles.textStyle}>OR</Text>
                    <Button onPress={()=>navigate("Home")} bgColor={style={backgroundColor:'gray'}}>Skip</Button>
                    <View style={{width:responsiveWidth(100),flexDirection:'row',height:responsiveHeight(65),justifyContent:'space-between'}}>
                        <TouchableWithoutFeedback onPress={()=>this.UserFacebookLogin()} style={{height:responsiveHeight(5)}}>
                            <Image source={require("/Users/lanet/Desktop/React-Native/MyShop/images/loginFB.png")} resizeMode={'contain'} style={Styles.loginLogoStyle}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.UserGoogleLogin()}>
                            <Image source={require("/Users/lanet/Desktop/React-Native/MyShop/images/loginGoogle.png")} resizeMode={'contain'} style={Styles.loginLogoStyle}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.UserTwitterLogin()}>
                            <Image source={require("/Users/lanet/Desktop/React-Native/MyShop/images/loginTwitter.png")} resizeMode={'contain'} style={Styles.loginLogoStyle}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.UserGithubLogin()}>
                            <Image source={require("/Users/lanet/Desktop/React-Native/MyShop/images/loginGithub.png")} resizeMode={'contain'} style={Styles.loginLogoStyle}/>
                        </TouchableWithoutFeedback>
                    </View>

                    <View>
                        {/*Login Modal*/}
                        <Modal isVisible={this.state.modalVisible}
                            supportedOrientations={['portrait','landscape']}
                        transparent={true} style={Styles.modalStyle}>
                                  <View style={{marginTop:responsiveHeight(-15)}}>
                                      <TouchableWithoutFeedback onPress={()=>this.closeModal()}>
                                          <View><Text style={{fontSize:responsiveFontSize(3.5),textAlign:'right',marginTop:responsiveHeight(-4),marginRight:responsiveWidth(2)}}>X</Text></View>
                                      </TouchableWithoutFeedback>
                                      <Image
                                          resizeMode={'contain'}
                                          source={require('/Users/lanet/Desktop/React-Native/MyShop/images/Icon.png')}
                                          style={{width:responsiveWidth(45),height:'40%',alignItems:'center',marginLeft:responsiveWidth(24),marginBottom:5}}
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
                                          <Button onPress={()=>this.UserLoginFunction()} bgColor={style={backgroundColor:'#3D5AFE',marginTop:responsiveHeight(3)}}> Login </Button>
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
        top: responsiveHeight(25),
        left: responsiveWidth(0),
        right: responsiveWidth(0),
        bottom: responsiveHeight(0),
        width: responsiveWidth(90),
        height: responsiveHeight(50),
        borderRadius: responsiveHeight(3),
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    mainViewStyle: {
        flex: 1,
    },
    inputStyle:{
        marginRight:responsiveWidth(0.5),
        marginLeft: responsiveWidth(0.5),
        borderWidth:responsiveWidth(0.40),
        borderColor:'black',
        borderRadius:responsiveHeight(2),
        fontSize: responsiveFontSize(4),
        width:responsiveWidth(85),
        lineHeight:responsiveHeight(4),
        paddingLeft:responsiveWidth(2),
        marginTop:responsiveHeight(3),
        color:'#000',
    },
    inputViewStyle:{
        height:responsiveHeight(10),
        width:responsiveWidth(90),
        flexDirection:'column',
        flex:1,
        alignItems:'center'
    },
    backGroundImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: responsiveFontSize(4)
    },
    loginLogoView:{
        flexDirection:'row',
    },
    loginLogoStyle:{
        height:responsiveHeight(10),
        width:responsiveWidth(15),
        margin:responsiveWidth(5),
        marginTop:responsiveHeight(10)
    }
}
export default MainPage;