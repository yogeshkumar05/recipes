// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
import {
  createStore,
  combineReducers
} from 'redux';
import mealsReducer from './store/reducers/Meals' ;
import { Provider } from 'react-redux';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) { // keep the splash open until fonts are loaded
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => setFontLoaded(false)}
      />)
  }

  return (
    <Provider store={store}>
      <StatusBar hidden/>
      <MealsNavigator/>
    </Provider>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
