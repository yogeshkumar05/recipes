import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
  const {
    screen
  } = styles;

  const {
    navigation
  } = props;

  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
  
  return (
    <MealList
      listData={favMeals}
      navigation ={navigation}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Facorites',
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='menu'
        iconName='ios-menu'
        onPress={() => {
          navData.navigation.toggleDrawer()
        }}
      />
    </HeaderButtons>
  }
}

export default FavoritesScreen;


