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
    ingredients: [
      "rice",
      "wine",
      "chicken stock",
      "sausage",
      "others flavors you like",
    ],
    steps: [
      "Toast rice",
      "Add sausage and all other flavors you like",
      "Once roasted nicely, deglaze with wine.",
      "add chicken stock 200ml, at a time",
      "serve, with white winde.",
      "Enjoy",
    ],
  },
  {
    key: 2,
    name: "Chilly con Carne",
    time: "4 Hours",
    difficulty: "Easy",
    ingredients: [
      "chorizo",
      "beans",
      "wine",
      "beef stock",
      "vegie-trifecta",
      "beef",
    ],
    steps: [
      "Caramelize onions and the rest of the trifecta",
      "Add the meat, cook until nice crust forms",
      "Deglaze the pot with wine",
      "Add spices, once fragrant, add beef stock",
      "Cook for 2 - 4 hours, the longer teh better",
      "Serve and Enjoy",
    ],
  },
  {
    key: 3,
    name: "Pizza Margharita",
    time: "1 Hour",
    difficulty: "Hard",
    ingredients: ["marinara", "mozzarela", "basil", "flour", "yiest"],
    steps: [
      "Make dough, mix flour water and yiest, until the dough is smooth",
      "Cover bowl with olive oil, place the dough and let rise",
      "Spread the dough on your knucles, forming nice edges",
      "Spread marinara sauce and cover with mozzarella",
      "Place in the oven 250degrees, for about 10 minutes",
      "After 10 mins, add fresh basil, turn off the oven",
      "Bake with residiual heat for 5 minutes",
      "Serve and enjoy",
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
