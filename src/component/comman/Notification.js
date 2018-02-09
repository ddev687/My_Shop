import React from 'react';
import { View, Text, StyleSheet, Picker, AppState, Platform,Alert } from 'react-native';
import NotificationController from './NotificationController';
import PushNotification from 'react-native-push-notification';
import AppStateListener from "react-native-appstate-listener";
import axios from 'axios';

class Notification extends React.Component
{
    constructor(props) {
        super(props);

        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            seconds: 5,
        };
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(appState) {
        if (appState === 'background') {
            let date = new Date(Date.now() + (this.state.seconds * 1000));


            PushNotification.localNotificationSchedule({
                message: "My Notification Message from MyShop",
                date,
            });
        }
    }

    render() {
        return (
                <NotificationController />
        );
    }
}

export default Notification;
