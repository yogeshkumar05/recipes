import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import {
  HeaderButton
} from 'react-navigation-header-buttons';
import {
  Ionicons
} from '@expo/vector-icons'
import COLORS from '../constants/Colors';

const CustomHeaderButton = props => {

  const {

  } = styles;

  const color = Platform.OS === 'android' ? 'white' : COLORS.primaryColor;

  return (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={color}/>
  )
}

const styles = StyleSheet.create({

});

export default CustomHeaderButton;



