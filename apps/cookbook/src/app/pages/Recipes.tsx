import React, {useEffect, useState} from 'react';
import {chain, map, remove} from 'lodash';
import 'tailwindcss/tailwind.css';
import {RecipeInfo} from "../../types/recipe.type";
import {useLocation} from "react-router-dom";

interface IProps {
  view?: string;
}

const Recipes = (props: IProps) => {
  const [recipes, setRecipes] = useState<RecipeInfo[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const query = React.useMemo(() => new URLSearchParams(location.search), [location.search]);

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3333/api/recipes/search/?s=${query.get('s') ? query.get('s') : ''}`);
      const data = await response.json();
      setRecipes(map(data.hits, (hit: any) => hit.recipe));
      setLoading(false);
    };

    const getBookmarks = async () => {
      setLoading(true);
      const response = await fetch('http://localhost:3333/api/recipes/bookmark');
      const data = await response.json();
      setBookmarks(chain(data).filter((o) => o.isBookmarked).map('recipeId').value());
      setRecipes(data);
      setLoading(false);
    }

    if (props.view === 'bookmark') {
      getBookmarks();
    } else {
      getRecipes();
    }

  }, [location]);


  const toggleBookmark = (r: RecipeInfo) => {
    r.isBookmarked = !bookmarks.includes(r.recipeId);
    if (bookmarks.includes(r.recipeId)) {
      // Remove bookmark
      fetch('http://localhost:3333/api/recipes/bookmark', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(r)
      })
        .then(res => res.json())
        .then(res => {
          if (res && res.deletedCount === 1) {
            remove(bookmarks, (o) => o === r.recipeId);
            setBookmarks([...bookmarks]);
            if (props.view === 'bookmark') {
              // remove recipe
              remove(recipes, (o) => o.recipeId === r.recipeId);
              setRecipes([...recipes]);
            }
          }
        });
    } else {
      // Save bookmark
      fetch('http://localhost:3333/api/recipes/bookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(r)
      })
        .then(res => res.json())
        .then(res => {
          if (res && res.success) {
            bookmarks.push(r.recipeId);
            setBookmarks([...bookmarks]);
          }
        });
    }
  }

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {props.view === 'bookmark' ? 'Bookmarks' : 'Top Recipes'}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading &&
              <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"/>
              </div>
            }

            {!loading && recipes.map((recipe) => (
              <div key={recipe.recipeId} className="relative">
                <span onClick={() => {
                  toggleBookmark(recipe)
                }} className="absolute cursor-pointer w-12 h-12 rounded-full top-0 right-0">
                  <svg className="max-w-full max-h-full" fill={bookmarks.includes(recipe.recipeId) ? 'red' : 'black'} width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                  </svg>
                </span>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={recipe.image}
                    alt={recipe.label}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <h3 className="mt-4 flex justify-start text-left text-lg text-gray-900">
                  <a href={recipe.uri}>
                    {recipe.label}
                  </a>
                </h3>
                <div className="mt-4 text-xs text-gray-500 flex justify-start">
                  <div>
                    {recipe.healthLabels.map((item) => (
                      <p className="float-left mr-1" key={item}>· {item}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="mt-1 text-sm text-gray-900">{recipe.yield} servings</p>
                  </div>
                  <p className="text-xl font-medium text-gray-900">{recipe.calories.toFixed(0)} Kcal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
