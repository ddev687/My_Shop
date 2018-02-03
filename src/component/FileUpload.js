import React,{Component} from 'react';
import {Image,Touchable,View} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

class FileUpload extends Component
{
    render(){
        return(
            <View>
                <Touchable>
                    <PhotoUpload
                        onPhotoSelect={avatar => {
                            if (avatar) {
                                console.log('Image base64 string: ', avatar)
                            }
                        }}
                    >
                        <Image
                            style={{
                                paddingVertical: 30,
                                width: 150,
                                height: 150,
                                borderRadius: 75
                            }}
                            resizeMode='cover'
                            source={{
                                uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                            }}
                        />
                    </PhotoUpload>
                </Touchable>
            </View>
        );
    }
}

export default FileUpload;