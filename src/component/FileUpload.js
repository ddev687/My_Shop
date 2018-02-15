import React,{Component} from 'react';
import {Image,Text,View,Alert} from 'react-native';

class FileUpload extends Component
{
    upload()
    {
            const data = new FormData();
            //const photos = [{url:"/Users/lanet/Desktop/React-Native/MyShop/images/slider_1.jpg"}, {url:"/Users/lanet/Desktop/React-Native/MyShop/images/slider_2.jpg"}];
            //photos.forEach((photo) => {
            data.append('sample', {
                uri: "/Users/lanet/Desktop/React-Native/MyShop/images/slider_1.jpg",
                name: 'test.jpg',
                type: 'multipart/form-data'
            });
            //});
            fetch("http://localhost:3000/upload",{
                method:'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body:data
            }).then(res=>{
                console.log("Upload");
            }).catch(e=>alert(e));
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:20}}>Image Upload</Text>
                {this.upload()}
            </View>
        );
    }
}

export default FileUpload;