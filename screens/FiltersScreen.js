import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const FiltersScreen = props => {
  const {
    screen
  } = styles;
  
  return (
    <View style={screen}>
      <Text>Filters screen</Text>
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

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter meals',
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

export default FiltersScreen;