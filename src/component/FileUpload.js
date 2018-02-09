import React,{Component} from 'react';
import {Image,Text,View,Alert} from 'react-native';
import ImageResizer from 'react-native-image-resizer';

class FileUpload extends Component
{
    upload()
    {
        let uri='/Users/lanet/Desktop/React/foodApp/src/images/dessert.jpg';

        let newWidth=800,newHeight=650;

        ImageResizer.createResizedImage(uri, newWidth, newHeight, 'JPEG', 100).then((uri) => {
            const data = new FormData();
            //const photos = [{url:"/Users/lanet/Desktop/React-Native/MyShop/images/slider_1.jpg"}, {url:"/Users/lanet/Desktop/React-Native/MyShop/images/slider_2.jpg"}];
            //photos.forEach((photo) => {
            data.append('sample', {
                uri: uri.path,
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
        }).catch((err) => {

            alert('Error: ' + err);

        });
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