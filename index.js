//Import a library to help e create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//import { AppRegistry } from 'react-native';
//import App from './App';


//create component

const App = () =>
    (
        <View>
            <Header headerText={'Album!!'} />
            <AlbumList />
        </View>
    );

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
