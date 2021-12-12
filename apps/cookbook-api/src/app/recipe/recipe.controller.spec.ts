import {Test, TestingModule} from '@nestjs/testing';
import {RecipeController} from './recipe.controller';
import {RecipeService} from "./recipe.service";


describe('RecipeController', () => {
  let controller: RecipeController;
  let recipeService: RecipeService;

  beforeEach(async () => {
    const RecipeServiceProvider = {
      provide: RecipeService,
      useFactory: () => ({
        search: jest.fn(() => {
          return {
            count: 1
          }
        })
      })
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeController],
      providers: [RecipeService, RecipeServiceProvider]
    }).compile();

    controller = module.get<RecipeController>(RecipeController);
    recipeService = module.get<RecipeService>(RecipeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(recipeService).toBeDefined();
  });
});
