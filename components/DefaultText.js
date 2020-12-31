import React from 'react';
import {
Text,
  StyleSheet
} from 'react-native';

const DefaultText = props => {
  const {
    children,
    style
  } = props;

  const {
    text
  } = styles;

  return (
    <Text style={{...text, ...style}}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
});

export default DefaultText;



