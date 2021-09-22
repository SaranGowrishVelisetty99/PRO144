import React from 'react';
import Home from './screens/home';
import Popular from './screens/popularMovieScreen';
import Recommended from './screens/recommendedMovieScreen';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { RFValue } from 'react-native-responsive-fontsize';

export default function App() {
  return <AppContainer />
}
const AppTopNavigaton = createMaterialTopTabNavigator({
  RecommendedMovies:
  {
    screen: Recommended,
    navigationOptions: {
      tabBarLabel: 'Recommended',
      tabBarOptions: {
        tabStyle: { backgroundColor: '#fff' },
        labelStyle: { color: '#000' },
        indicatorStyle: { backgroundColor: '#000' }
      }
    }
  },
  PopularMovies: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: 'Popular',
      tabBarOptions: {
        tabStyle: { backgroundColor: '#fff' },
        labelStyle: { color: '#000' },
        indicatorStyle: { backgroundColor: '#000' }
      }
    }
  }
})
const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  AppTopNav: {
    screen: AppTopNavigaton,
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerTitle: 'Recommende Movies',
      headerStyle: { backgroundColor: '#d500f9' },
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: RFValue(18)
      }
    }
  }
},
  {
    initialRouteName: 'Home'
  }
)
const AppContainer = createAppContainer(AppStackNavigator)