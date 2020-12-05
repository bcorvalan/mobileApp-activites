import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import ActivitesScreen from '../screens/ActivitesScreen'
import { createAppContainer } from 'react-navigation';

const AppNavigator =
    createStackNavigator({
        Login: LoginScreen,
        Home: HomeScreen,
        Menu:  MenuScreen,
        Activites: ActivitesScreen
    })

export default createAppContainer(AppNavigator);