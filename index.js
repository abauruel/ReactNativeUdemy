//Import a library to help e create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//import { AppRegistry } from 'react-native';
//import App from './App';


//create component

const App = () =>
    (
        <Header headerText={'Album!!'} />
    );

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
