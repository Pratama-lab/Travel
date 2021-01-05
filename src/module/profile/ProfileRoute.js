import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ProfilePage from './screen/Profile'

export const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            headerShown: false
        }
    }
})