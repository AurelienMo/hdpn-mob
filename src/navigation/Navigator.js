import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreenView from "../view/screens/HomeScreenView";
import OtherScreenView from "../view/screens/OtherScreenView";


const Navigator = createBottomTabNavigator({
    Home: {screen: HomeScreenView},
    Other: {screen: OtherScreenView}
});

export default createAppContainer(Navigator);
