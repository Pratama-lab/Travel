import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async componentDidMount() {
        try {
            setTimeout(() => {
                this.props.navigation.navigate('Home')
            }, 2000);
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text> Splash Screen </Text>
            </View>
        )
    }
}
