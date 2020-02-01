import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import GeolocationScreen from '../screens/GeolocationScreen';

const ListStack = createStackNavigator(
  {
    Home: ListScreen,
  }
);

ListStack.navigationOptions = {
  tabBarLabel: 'List',
};

const MapStack = createStackNavigator(
  {
    Links: MapScreen,
  }
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
};

const GeolocationStack = createStackNavigator(
  {
    Links: GeolocationScreen,
  }
);

GeolocationStack.navigationOptions = {
  tabBarLabel: 'Geolocation',
};

export default createBottomTabNavigator({
  ListStack,
  MapStack,
  GeolocationStack,
});