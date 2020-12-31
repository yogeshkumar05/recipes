import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  Platform
} from 'react-native';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import COLORS from '../constants/Colors';

const FilterSwitch = props => {
  const {
    label,
    state,
    onChange

  } = props;

  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={
          {
            true: COLORS.primaryColor,
            false: ''
          }
        }
        thumbColor={Platform.OS === 'android' ? COLORS.primaryColor : ''}
        value={state}
        onValueChange={onChange}
      />

    </View>
  )
}

const FiltersScreen = props => {
  const {
    screen,
    title,
    filterContainer
  } = styles;
  const {navigation} = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFiltes = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian
    };
    console.log('appliedFiltes', appliedFiltes);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters])

  return (
    <View style={screen}>
      <Text style={title}>Available Filters</Text>
      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegatarian'
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    margin: 20,
    fontSize: 22
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginVertical: 15
  }
});

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter meals',
    headerLeft: (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='menu'
        iconName='ios-menu'
        onPress={() => {
          navData.navigation.toggleDrawer()
        }}
      />
    </HeaderButtons>),
    headerRight: (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title='Save'
      iconName='ios-save'
      onPress={() => {
        navData.navigation.getParam('save')()
      }}
    />
  </HeaderButtons>)
  }
}

export default FiltersScreen;