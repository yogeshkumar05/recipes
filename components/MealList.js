import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import MealItem from './MealItem';
import {
  useSelector
} from 'react-redux';

const MealList = props => {
  const {
    navigation: {
      navigate
    },
    navigation,
    listData
  } = props;

  const {
    screen
  } = styles;

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMeal = (itemData) => {
    // const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
    return (<MealItem
      itemData={itemData}
      onMealSelect={
        () => {
          navigate('MealDetail', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            // isFavorite
          }
          )
        }}
    />)
  }

  return (
    <View style={screen}>
      <FlatList
        data={listData}
        renderItem={renderMeal}
        style={{
          width: '100%'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MealList;



