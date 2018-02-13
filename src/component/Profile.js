import React,{Component} from 'react';
import {View,Text,Image,Alert} from 'react-native';
import Input from '../component/comman/Input';
import OnClick from '../component/comman/OnClick';
import Button from '../component/comman/Button';

class Profile extends Component
{
    constructor(props)
    {
        super(props);
        this.state={Profile:[],loading:false,UserName:'',Password:''};
    }
    async getData()
    {
        var promise=await new Promise((resolve,reject)=>{
        fetch('http://localhost:3000/getUser', {
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
    async componentDidMount()
    {
        this.setState({ loading: true });
        await this.getData().then((Profile)=>{
            this.setState({
                loading:false,
                Profile
            })
        })
    }
    renderProfile = (profile) => {
        return profile.map((profile,index) => {
            return(
                <View style={{flex:1}} key={index}>
                    <OnClick>
                        <Image
                            source={{uri:profile.Photo}}
                            style={{height:100,width:150,margin:10}}
                        />
                    </OnClick>
                    <Input
                        value={profile.Name}
                        onChangeText={(UserName)=>this.setState({UserName})}
                        />
                    <Input
                        value={profile.Email}
                        onChangeText={(UserName)=>this.setState({Password})}
                    />
                </View>
            );
        })
    }
    render(){
        if (this.state.loading) {
            return <Text>Loading...</Text>
        }
        var {Profile}=this.state;
        return(
            <View style={{flex:1}}>
                {this.renderProfile(Profile)}
                <Button>Save</Button>
            </View>
        );
    }
}

export default Profile;