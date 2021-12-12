export type RecipeHit = {
  recipe: RecipeInfo;
  _links: object;
}

export type RecipeSearchResults = {
  count: number;
  hits: RecipeHit[];
  _links: any;
  from?: number;
  to?: number
}

export type RecipeInfo = {
  recipeId: string;
  source: string;
  uri: string;
  label: string;
  image: string;
  images: object;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: [];
  healthLabels: [];
  cautions: [];
  ingredientLines: [];
  ingredients: object[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: [];
  mealType: [];
  dishType: [];
  totalNutrients: object;
  totalDaily: {
    ENERC_KCAL: {
      quantity: number;
    };
  };
  digest: [];
  isBookmarked: boolean;
}


export type Recipe = {
  recipe: {
    uri: string;
    image: string;
    source: string;
    label: string;
    url: string;
    calories: number;
    yield: number;
    ingredients: object[];
  };
};
