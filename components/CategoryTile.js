import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const CategoryTile = props => {
  const {
    title,
    id,
    color,
    onSelect
  } = props;

  const {
    gridItem,
    container
  } = styles;

  let TouchableComponent = TouchableOpacity;
  if (Platform.OS == 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={gridItem}>
      <TouchableComponent
        style={{flex: 1}}
        onPress={onSelect}>
        <View style={{ ...container, ...{ backgroundColor: color } }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    // overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right'
  }
});

export default CategoryTile;


