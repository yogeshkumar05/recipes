import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  CATEGORIES,
} from '../data/dummy-data';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';

const CategoryMealscreen = props => {
  const {
    screen
  } = styles;

  const {
    navigation
  } = props;

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  const categoryMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);


  const {
    title
  } = selectedCategory

  // const renderMeal = (itemData) => {
  //   console.log('itemData 1', itemData);
  //   return (<MealItem
  //     itemData={itemData}
  //     onMealSelect={
  //       () => {
  //         navigate('MealDetail', {
  //           mealId: itemData.item.id
  //         }
  //         )
  //       }}
  //   />)
  // }

  return (
    <MealList
      listData = {categoryMeals}
      navigation ={navigation}
    />
    // <View style={screen}>
    //   <FlatList
    //     data={categoryMeals}
    //     renderItem={renderMeal}
    //     style={{
    //       width: '100%'
    //     }}
    //   />
    // </View>
  )
}

CategoryMealscreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  return {
    headerTitle: selectedCategory.title
  }

}

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
});

export default CategoryMealscreen;



