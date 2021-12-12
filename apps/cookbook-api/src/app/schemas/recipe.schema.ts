import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import {Document} from 'mongoose';


export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  @Prop({unique: true})
  recipeId: string;
  @Prop()
  source: string;
  @Prop({unique: true})
  uri: string;
  @Prop()
  label: string;
  @Prop()
  image: string;
  @Prop({type: mongoose.Schema.Types.Mixed})
  images: any;
  @Prop()
  url: string;
  @Prop()
  shareAs: string;
  @Prop()
  yield: number;
  @Prop()
  dietLabels: [];
  @Prop()
  healthLabels: [];
  @Prop()
  cautions: [];
  @Prop()
  ingredientLines: [];
  @Prop()
  ingredients: object[];
  @Prop()
  calories: number;
  @Prop()
  totalWeight: number;
  @Prop()
  totalTime: number;
  @Prop()
  cuisineType: [];
  @Prop()
  mealType: [];
  @Prop()
  dishType: [];
  @Prop({type: mongoose.Schema.Types.Mixed})
  totalNutrients: any;
  @Prop({type: mongoose.Schema.Types.Mixed})
  totalDaily: any;
  digest: [];
  @Prop()
  isBookmarked: boolean;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
