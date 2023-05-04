import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type OneRecipe = {
  key: number;
  name: string;
  time: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Pro";
  ingredients: string[];
  steps: string[];
};
export type RecipesState = OneRecipe[];

const initialState: RecipesState = [
  {
    key: 1,
    name: "Rissoto",
    time: "1 Hour",
    difficulty: "Medium",
    ingredients: ["rice", "wine", "chicken stock", "sausage"],
    steps: [
      "toast rice",
      "add sausage",
      "deglaze with wine",
      "add chicken stock 200ml, at a time",
      "serve",
    ],
  },
  {
    key: 2,
    name: "Chilly",
    time: "4 Hours",
    difficulty: "Easy",
    ingredients: ["sausage", "beans", "wine", "beef stock", "vegies"],
    steps: [
      "toas meat and veggies",
      "add beans",
      "deglaze with wine",
      "add beef stock",
      "cook for 4 hours",
      "serve",
    ],
  },
  {
    key: 3,
    name: "Pizza",
    time: "1 Hour",
    difficulty: "Hard",
    ingredients: ["sausage", "marinara", "cheese", "basil", "pizza dough"],
    steps: [
      "spread dough",
      "add your topings",
      "bake 200 degress for 5 minutes",
      "serve",
    ],
  },
];

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<OneRecipe>) => {
      state.push(action.payload);
    },
    // removeRecipe: (state, action: PayloadAction<number>) => {
    //   console.log("Removing id: " + action.payload);
    //   state = state.filter((recipe) => recipe.key !== action.payload);
    // },
    removeRecipe: (state, action: PayloadAction<number>) => {
      console.log("Removing id: " + action.payload);
      const indexToRemove = state.findIndex(
        (recipe) => recipe.key === action.payload
      );
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
