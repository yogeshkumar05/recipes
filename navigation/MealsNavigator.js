import React from 'react';
import {
  Platform,
  Text
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealscreen from '../screens/CategoryMealScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import COLORS from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


const navigationOptions = {
  // headerTitle: 'Meal Categories',
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : 'white'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions
  },
  CategoryMeals: {
    screen: CategoryMealscreen,
    navigationOptions
  },
  MealDetail: {
    screen: MealDetailScreen,
    navigationOptions
  }
});

const FavsNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: navigationOptions
});


const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />)
      },
      tabBarColor: COLORS.primaryColor,
      tabBarLabel: <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>
    }
  },
  Favorites: {
    screen: FavsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      },
      tabBarLabel: <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text>
    }
  },
};

const MealsFavNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
  tabScreenConfig,
  {
    activeTintColor: '#fff',
    shifting: true,
    barStyle: {
      backgroundColor: COLORS.primaryColor
    }
  }
) : createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    labelStyle: {
      fontFamily:'open-sans-bold'
    },
    activeTintColor: COLORS.secondaryColor,
    // backgroundColor: 'yellow',
  }
});

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
},
  {
    defaultNavigationOptions: navigationOptions
  })

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
},
{
  contentOptions: {
    activeTintColor: COLORS.secondaryColor,
    fontFamily: 'open-sans'
  }
})

export default createAppContainer(MainNavigator);