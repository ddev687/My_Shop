import React from 'react';
import Modal from 'react-native-modal';
import { Text, Button, View,TextInput } from 'react-native';
import Input from './Input';

export default class LoginModal extends React.Component {
    state = {
        modalVisible: true
    };
    openModal()
    {
        this.setState({modalVisible:true});
    }
    closeModal()
    {
        this.setState({modalVisible:false});
    }
    render(){
        console.log("sadasdasd");
         return (
                <View style={{ flex: 1 }}>
                    <Modal isVisible={this.state.modalVisible}>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </View>
                        <Button onPress={()=>this.closeModal()} title="Close Model"/>
                    </Modal>
                </View>
            )
    }
}