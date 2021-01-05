import React, { Component } from 'react'
import { Text, View, ToastAndroid, BackHandler } from 'react-native'

let backPressed = 0;

export default class Home extends Component {

    _didFocusSubscription;
    _willBlurSubscription;

    constructor(props) {
        super(props);
        this.state = {
            backPressed: 1
        }
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload => BackHandler.addEventListener('hardwareBackPress', this.handleBackButton))
    }

    componentDidMount(){
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload => BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton))
    }

    handleBackButton() {
        if (backPressed > 0) {
            BackHandler.exitApp()
            backPressed = 0
        } else {
            backPressed++;
            ToastAndroid.show('Press Again To Exit', ToastAndroid.SHORT)
            setTimeout(() => {
                backPressed = 0
            }, 2000);
            return true;
        }
    }

    render() {
        return (
            <View>
                <Text> Home </Text>
            </View>
        )
    }
}
