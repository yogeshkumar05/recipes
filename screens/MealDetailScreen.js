import React, { useCallback, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Platform,
  ScrollView,
  Image
} from 'react-native';
import CustomHeaderButton from '../components/HeaderButton';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  toggleFavorite
} from '../store/actions/meals';

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

  console.log('navigation.getParam', props.navigation.getParam('toggleFav'));

  const dispatch = useDispatch();
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.meals);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps
  } = selectedMeal;

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const isFavorite = favoriteMeals.some(meal => meal.id === mealId);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler, isFavorite: isFavorite});
  }, [toggleFavoriteHandler, isFavorite]);

  const toggleFavoriteHandler = useCallback(() => {
    console.log('toggle')
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId])

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
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = (navigationData) => {

  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const isFavorite = navigationData.navigation.getParam('isFavorite');
  const toggleFav = navigationData.navigation.getParam('toggleFav');
  console.log('isFavorite', isFavorite);

  return {
    headerTitle: mealTitle,
    headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
        title='Favorite'
        onPress={toggleFav}
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