import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ListBusPage from './screen/ListBus'

export const ListStack = createStackNavigator({
    ListBus: {
        screen: ListBusPage,
        navigationOptions: {
            headerShown: false
        }
    }
})