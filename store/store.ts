import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../store/recipeSlice";
import iDReducer from "../store/idSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    identifier: iDReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
