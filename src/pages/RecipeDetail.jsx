// src/pages/RecipeDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

useEffect(() => {
  async function fetchRecipe() {
    try {
      const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY; // <-- use env variable
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      const data = await res.json();
      setRecipe(data);
    } catch (err) {
      console.error("Error fetching recipe detail:", err);
    }
  }
  fetchRecipe();
}, [id]);


  if (!recipe)
    return (
      <p className="p-6 text-center text-gray-500 text-lg">Loading recipe...</p>
    );

  return (
    <div className="bg-white min-h-screen py-8 px-4 sm:px-10 md:px-16 max-w-5xl mx-auto">
      {/* Back Button */}
      <Link
        to="/recipes"
        className="inline-block mb-6 text-[#BFA38C] font-semibold hover:text-[#A1887F] transition"
      >
        ← Back to Recipes
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#BFA38C] mb-6 text-center md:text-left">
        {recipe.title}
      </h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-2xl shadow-lg mb-8 object-cover max-h-[500px]"
      />

      {/* Info Section */}
      <div className="flex flex-wrap gap-6 mb-8 justify-center md:justify-start text-gray-700">
        <span className="bg-[#FFF8F0] px-4 py-2 rounded-full shadow-sm border border-[#E6DED5]">
          Servings: {recipe.servings}
        </span>
        <span className="bg-[#FFF8F0] px-4 py-2 rounded-full shadow-sm border border-[#E6DED5]">
          Ready in: {recipe.readyInMinutes} min
        </span>
        <span className="bg-[#FFF8F0] px-4 py-2 rounded-full shadow-sm border border-[#E6DED5]">
          Dish Type : {recipe.dishTypes.join(", ")}, Vegetarian: {recipe.vegetarian ? "Yes" : "No"}
        </span>
        {recipe.diets?.length > 0 && (
          <span className="bg-[#FFF8F0] px-4 py-2 rounded-full shadow-sm border border-[#E6DED5]">
            Diet: {recipe.diets.join(", ")}
          </span>
        )}
      </div>

      {/* Summary */}
      <div className="prose max-w-none mb-8">
        <h2 className="text-2xl font-semibold text-[#BFA38C] mb-2">Summary</h2>
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
      </div>

      {/* Ingredients */}
      {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#BFA38C] mb-4">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {recipe.extendedIngredients.map((ing) => (
              <li key={ing.id}>
                {ing.original}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions */}
      <div className="prose max-w-none mb-8">
        <h2 className="text-2xl font-semibold text-[#BFA38C] mb-2">
          Instructions
        </h2>
        {recipe.instructions ? (
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          />
        ) : (
          <p className="text-gray-500">No instructions available for this recipe.</p>
        )}
      </div>
    </div>
  );
}
