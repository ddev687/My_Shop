/*
import {Permissions,Notifications} from 'expo';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
export default async =()=>{
    let previousToken=await AsycnStorage.getItem(pushToken);
    if(previousToken)
    {
        return;
    }else {
        let { status }=Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
        if(status !== 'granted')
        {
            return;
        }
        let token=Notifications.getExpoPushTokenAsync();
        await axios.post("http://rallycoding.herokuapp.com/api/tokens",{token:{token}});
        AsycnStorage.setItem('pushToken',token);
    }
}*/
