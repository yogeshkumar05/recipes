import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import MealList from '../components/MealList';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const {
    screen
  } = styles;

  const {
    navigation
  } = props;

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  // const favMeals = availableMeals.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  if(favMeals.length <= 0 || !favMeals) {
    return (
      <View style={screen}>
        <DefaultText>
          No favorite meals found. Start Adding some !!
        </DefaultText>
      </View>
    )

  }
  
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
    headerTitle: 'Your Favorites',
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


