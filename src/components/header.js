// import library for making compoments
import React from 'react';
import { Text, View } from 'react-native';

//make a component

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    ); 
};

const styles = {

    viewStyle: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowOpacity: 0.2,
        elevation: 0.2,
        position: 'relative'

    },
    textStyle: {
            fontSize: 20
        }
};
//make  the component avaiable to other parts of the app
export default Header;