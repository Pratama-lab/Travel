import React, { Component } from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

//---------- import bottom tab ----------
import { HomeStack } from './module/home/HomeRoute'
import { ListStack } from './module/listBus/ListRoute'
import { ProfileStack } from './module/profile/ProfileRoute'

//---------- import screen ----------
import SplashScreenPage from './screen/SplashScreen'


const home = require('./asset/icons/home.png')
const homeActive = require('./asset/icons/homeActive.png')
const bus = require('./asset/icons/bus.png')
const busActive = require('./asset/icons/busActive.png')
const profile = require('./asset/icons/profile.png')
const profileActive = require('./asset/icons/profileActive.png')

const MainTab = createBottomTabNavigator({
    ModuleHome: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
                <Image source={focused ? homeActive : home} style={{ width: wp('8%'), height: wp('8%') }} />
            )
        }
    },

    ModuleListBus: {
        screen: ListStack,
        navigationOptions: {
            tabBarLabel: 'List Bus',
            tabBarIcon: ({ focused }) => (
                <Image source={focused ? busActive : bus} style={{ width: wp('8%'), height: wp('8%') }} />
            )
        }
    },

    ModuleProfile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
                <Image source={focused ? profileActive : profile} style={{ width: wp('8%'), height: wp('8%') }} />
            )
        }
    }
},
{
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#4E7ED6',
        inactiveTintColor: '#CCCCCC',
        style: { borderTopColor: '#FFF', height: wp('17%') }
    }
})

const App = createStackNavigator({
    SplashScreen: {
        screen: SplashScreenPage,
        navigationOptions: {
            headerShown: false
        }
    },

    Tabs: {
        screen: MainTab,
        navigationOptions: {
            headerShown: false
        }
    }
})

export default createAppContainer(App)