import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Platform
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import COLORS from '../constants/Colors';
import CategoryTile from '../components/CategoryTile';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
  const {
    screen
  } = styles;

  const {
    navigation: {
      navigate
    }
  } = props;

  const renderGridItem = itemData => {
    const {
      item: {
        title,
        id,
        color
      }
    } = itemData;

    const {
      gridItem
    } = styles;

    return <CategoryTile
      title={title}
      color={color}
      onSelect={
        () => {
          navigate('CategoryMeals', {
            categoryId: id
          }
          )
        }}
    />

    // return (
    //   <TouchableOpacity
    //     style={gridItem}
    //     onPress={() => {
    //       navigate('CategoryMeals', {
    //         categoryId: id
    //       }
    //       )
    //     }}>
    //     <View>
    //       <Text>{title}</Text>
    //     </View>
    //   </TouchableOpacity>
    // )
  }

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    />
  )
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;