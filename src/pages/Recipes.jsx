// src/pages/Recipes.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Recipes({ searchQuery }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

let url;

if (searchQuery) {
  url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=6&addRecipeInformation=true&apiKey=${API_KEY}`;
} else {
  url = `https://api.spoonacular.com/recipes/random?number=6&apiKey=${API_KEY}`;
}

       
       

        const res = await fetch(url);
        const data = await res.json();
        if (searchQuery) setRecipes(data.results || []);
        else setRecipes(data.recipes || []);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    }

    fetchRecipes();
  }, [searchQuery]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-quicksand font-bold mb-8 text-center text-[#BFA38C]">
        Recipes
      </h1>

      {recipes.length === 0 ? (
        <p className="text-gray-600 text-center">No recipes found. Try another search!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="block bg-[#FFF8F0] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
            >
              <figure className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                /> 
              </figure>
              <div className="p-4">
                <h2 className="text-xl font-quicksand font-semibold mb-2">{recipe.title}</h2>
                {recipe.servings && recipe.readyInMinutes && (
                  <p className="text-gray-600 text-sm">
                    {recipe.servings} servings • {recipe.readyInMinutes} min
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
