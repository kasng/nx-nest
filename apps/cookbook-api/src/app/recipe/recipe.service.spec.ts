import {Test, TestingModule} from '@nestjs/testing';
import {BookmarkInterface, RecipeService} from './recipe.service';
import {AxiosResponse} from "axios";
import {of} from "rxjs";

class RecipeServiceMock {
  search(keyword: string | null) {
    return {
      count: 20,
      hits: [],
      _links: {},
      from: 0,
      to: 20
    };
  };

  saveBookmark(recipe: BookmarkInterface) {
    return Promise.resolve(true);
  }

  removeBookmark(recipe: BookmarkInterface) {
    return Promise.resolve({
      deletedCount: 1
    });
  }

  loadBookmarks() {
    return Promise.resolve([]);
  }
}

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(async () => {
    const RecipeServiceProvider = {
      provide: RecipeService,
      useClass: RecipeServiceMock
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeService, RecipeServiceProvider],
    }).compile();

    service = module.get<RecipeService>(RecipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('searchRecipes', () => {
    it('should search recipes return results', (done) => {
      const result: AxiosResponse = {
        data: {
          count: 20,
          hits: [],
          _links: {},
          from: 0,
          to: 20
        },
        status: 200,
        statusText: '',
        headers: {},
        config: {},
      };

      jest.spyOn(service, 'search').mockImplementationOnce(() => of(result));

      service.search(null).subscribe(res => {
        expect(res).toEqual(result);
        done();
      });
    });
  });


  describe('bookmarkRecipe', () => {
    it('should bookmark return reponse', (done) => {
      const input = {
        recipeId: ''
      };

      const response = false;

      jest.spyOn(service, 'saveBookmark').mockResolvedValueOnce(response);

      service.saveBookmark(input).then(value => {
        expect(value).toEqual(response);
        done();
      }).catch(reason => {
        expect(reason).toThrow();
        done();
      })
    });
  });


  describe('removeBookmark', function () {
    it('should remove bookmark return response', (done) => {
      const input = {
        recipeId: ''
      };

      const response = {
        deletedCount: 1
      };

      jest.spyOn(service, 'removeBookmark').mockResolvedValueOnce(response);

      service.removeBookmark(input).then(value => {
        expect(value).toEqual(response);
        done();
      }).catch(reason => {
        expect(reason).toThrow();
        done();
      })
    });
  });

  describe('loadBookmarks', function () {
    it('should load bookmarks return response', (done) => {
      jest.spyOn(service, 'loadBookmarks').mockResolvedValueOnce([]);

      service.loadBookmarks().then(value => {
        expect(value).toEqual([]);
        done();
      }).catch(reason => {
        expect(reason).toThrow();
        done();
      })
    });
  });
});
