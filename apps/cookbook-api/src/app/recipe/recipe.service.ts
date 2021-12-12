import {Injectable} from '@nestjs/common';
import {last, sample} from "lodash";
import {RECIPE_INIT_KEYWORDS} from "../config";
import {HttpService} from "@nestjs/axios";
import {ConfigService} from "@nestjs/config";
import {map, Observable} from "rxjs";
import {AxiosResponse} from "axios";
import {RecipeInfo, RecipeSearchResults} from "../types/recipe.type";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Recipe, RecipeDocument} from "../schemas/recipe.schema";
import {Connection, Model} from "mongoose";
import * as lodash from 'lodash';

export interface BookmarkInterface {
  recipeId: string;
}

@Injectable()
export class RecipeService {
  constructor(
    private httpService: HttpService,
    private config: ConfigService,
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
    @InjectConnection('test_db') private connection: Connection
  ) {
  }

  async saveBookmark(recipe: BookmarkInterface): Promise<boolean> {
    const update: any = await this.recipeModel.findOneAndUpdate({
      recipeId: recipe.recipeId
    }, recipe, {
      new: true,
      upsert: true
    }).exec();
    if (update._id) {
      return true;
    }
    return false;
  }

  removeBookmark(recipe: BookmarkInterface): Promise<any> {
    return this.recipeModel.deleteOne({recipeId: recipe.recipeId}).exec();
  }

  loadBookmarks() {
    return this.recipeModel.find({}).exec();
  }

  search(keyword: string | null): Observable<AxiosResponse<RecipeSearchResults>> {
    if (!keyword) {
      keyword = sample(RECIPE_INIT_KEYWORDS);
    }

    return this.httpService.get(`https://api.edamam.com/api/recipes/v2?app_id=${this.config.get('RECIPE_APP_ID')}&app_key=${this.config.get('RECIPE_APP_KEY')}&q=${keyword}&type=public`).pipe(
      map(res => {
        if (res.data.hits.length > 0) {
          res.data.hits = lodash.map(res.data.hits, (o) => {
            if (String(o.recipe.uri).split('#').length > 0) {
              o.recipe.recipeId = String(last(o.recipe.uri.split('#'))).replace('recipe_', '');
            }
            o.recipe.isBookmarked = true;
            return o;
          });
        }
        return res;
      })
    );
  }
}
