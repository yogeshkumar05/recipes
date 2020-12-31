import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import MealItem from './MealItem';

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

  const renderMeal = (itemData) => {
    console.log('itemData 1', itemData);
    return (<MealItem
      itemData={itemData}
      onMealSelect={
        () => {
          navigate('MealDetail', {
            mealId: itemData.item.id
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



