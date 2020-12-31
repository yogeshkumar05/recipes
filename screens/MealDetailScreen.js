import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Platform,
  ScrollView,
  Image
} from 'react-native';
import COLORS from '../constants/Colors';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
}

const MealDetailScreen = props => {
  const {
    screen,
    image,
    details
  } = styles;

  const {
    navigation: {
      popToTop,
      goBack
    }
  } = props;

  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps
  } = selectedMeal;

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={image} />
      <Text style={styles.mainTitle}>{title}</Text>
      <View style={details}>
        <DefaultText>
          {duration}m
            </DefaultText>
        <DefaultText>
          {complexity}
        </DefaultText>
        <DefaultText>
          {affordability}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {
        ingredients.map((item, index) => <ListItem key={item + index}>{item}</ListItem>)
      }

      <Text style={styles.title}>Steps</Text>
      {
        steps.map((item, index) => <ListItem key={item + index}>{item}</ListItem>)
      }
      {/* <Button title='Home' onPress={() => popToTop()} /> */}
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName='ios-star'
        title='Favorite'
        onPress={
          () => {
            console.log('Fav')
          }
        }
      />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;