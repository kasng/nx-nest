import {Module} from '@nestjs/common';
import {RecipeController} from './recipe.controller';
import {RecipeService} from './recipe.service';
import {HttpModule} from "@nestjs/axios";
import {MongooseModule} from "@nestjs/mongoose";
import {Recipe, RecipeSchema} from "../schemas/recipe.schema";

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{
      name: Recipe.name,
      schema: RecipeSchema
    }], 'test_db')
  ],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {
}
