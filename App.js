import React, { Component } from 'react';
import SideBarMenu from './src/Router';
import {View,Alert} from 'react-native';
import Notification from "./src/component/comman/Notification";
import FileUpload from "./src/component/FileUpload";
//import Perf from 'react-addons-perf';

export default class App extends Component
{
  constructor(props){
      super(props);
  }
  render() {
    return (
        <SideBarMenu/>
    )
  }
}

