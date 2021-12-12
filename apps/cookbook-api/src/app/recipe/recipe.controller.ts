import {Body, Controller, Delete, Get, Post, Req, Res} from '@nestjs/common';
import {Request, Response} from "express";
import {RecipeService} from "./recipe.service";
import {RecipeInfo} from "../types/recipe.type";

@Controller('recipes')
export class RecipeController {
  constructor(
    private recipeService: RecipeService
  ) {
  }

  @Get('search')
  async search(
    @Req() req: Request,
    @Res() res: Response
  ) {
    const keyword = 's' in req.query ? String(req.query.s) : null;
    this.recipeService.search(keyword).subscribe(value => {
      if (value.status === 200) {
        return res.status(200).json(value.data);
      } else {
        return res.status(204).send(null);
      }
    });
  }

  @Get('bookmark')
  async getBookmarks(
    @Req() req: Request,
    @Res() res: Response
  ) {
    const data = await this.recipeService.loadBookmarks();
    return res.status(200).json(data);
  }

  @Post('bookmark')
  async bookmark(
    @Body() data: RecipeInfo,
    @Res() res: Response
  ) {
    if (data && data.recipeId) {
      const save = await this.recipeService.saveBookmark(data);
      return res.status(200).json({
        success: save
      });
    }
    return res.status(204).send(null);
  }

  @Delete('bookmark')
  async removeBookmark(
    @Body() data: RecipeInfo,
    @Res() res: Response
  ) {
    if (data) {
      const del = await this.recipeService.removeBookmark(data);
      return res.status(200).json(del);
    }
    return res.status(204).send(null);
  }
}
