import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreenView from "../view/screens/HomeScreenView";


const Navigator = createBottomTabNavigator({
    Home: {screen: HomeScreenView},
});

export default createAppContainer(Navigator);
