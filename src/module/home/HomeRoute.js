import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomePage from './screen/Home'

export const HomeStack = createStackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            headerShown: false
        }
    }
})