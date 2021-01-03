import {
  MEALS
} from '../../data/dummy-data'

import {
  TOGGLE_FAVORITE,
  SET_FILTERS
} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      let updatedfavoriteMeals = [...state.favoriteMeals];

      if (existingIndex >= 0) {
        updatedfavoriteMeals.splice(existingIndex, 1);
      } else {
        updatedfavoriteMeals = state.favoriteMeals.concat(state.meals.find(meal => meal.id === action.mealId));
      }
      return {
        ...state,
        favoriteMeals: updatedfavoriteMeals
      }
    
    case SET_FILTERS:
      const appliedFiltes = action.filters;
      const {
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
      } = appliedFiltes;
      const filteredMeals = state.meals.filter(meal => 
        meal.isGlutenFree === isGlutenFree &&
        meal.isVegan === isVegan && 
        meal.isVegetarian === isVegetarian && 
        meal.isLactoseFree === isLactoseFree
      )

      return {...state, filteredMeals}

    default:
      return state;
  }
}

export default mealsReducer;