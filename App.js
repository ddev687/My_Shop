import React, { Component } from 'react';
import SideBarMenu from './src/Router';
import {View,Alert} from 'react-native';
import Notification from "./src/component/comman/Notification";
import FileUpload from "./src/component/FileUpload";

export default class App extends Component
{
  render() {
    return (
        <SideBarMenu/>
    )
  }
}

