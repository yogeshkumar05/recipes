import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { createNavigationContainer } from 'react-navigation';
import DefaultText from '../components/DefaultText';

const MealItem = props => {
  const {
    itemData,
    onMealSelect
  } = props;

  const {
    item: {
      title,
      duration,
      complexity,
      affordability,
      imageUrl
    }
  } = itemData;

  const {
    mealRow,
    mealItem,
    mealHeader,
    mealDetail,
    bgImage
  } = styles;

  return (
    <View style={mealItem}>
      <TouchableOpacity onPress={onMealSelect}>
        <View>
          <View style={{ ...mealRow, ...mealHeader }}>
            <ImageBackground source={{uri: imageUrl }} style={bgImage}>
            <DefaultText style={styles.title}>
              {title}
            </DefaultText>
            </ImageBackground>
          </View>
          <View style={{ ...mealRow, ...mealDetail }}>
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
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '90%',
    backgroundColor: '#dedede',
    marginVertical: 20,
    marginHorizontal: '5%',
    overflow: 'hidden',
    borderRadius: 10
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '90%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%'
  },
  bgImage: {
     width: '100%',
     height: '100%',
     justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize:22,
    color: '#fff',
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    textAlign: 'center',
  }
});

export default MealItem;



