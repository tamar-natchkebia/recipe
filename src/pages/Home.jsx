// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import food3 from "../assets/food3.jpeg";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        // Fetch twice for 3 recipes each to get 6
        const res1 = await axios.get(
          `https://api.spoonacular.com/recipes/random?number=3&apiKey=e67e177e66e0412bb818818eb2f841ce`
        );
        const res2 = await axios.get(
          `https://api.spoonacular.com/recipes/random?number=3&apiKey=e67e177e66e0412bb818818eb2f841ce`
        );

        // Axios wraps response in `data`
        setRecipes([...res1.data.recipes, ...res2.data.recipes]);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <section className="relative">
      {/* Hero */}
      <div className="h-screen sticky top-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${food3})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center md:justify-start px-6 md:px-16">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-quicksand font-bold text-white drop-shadow-lg">
              Unlock Your Recipe
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-lora text-white/90 drop-shadow-md">
              Discover new dishes every day
            </p>
            <Link
              to="/recipes"
              className="mt-6 inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </div>

      {/* Recipes Section (slides over hero) */}
      <div className="relative z-20 bg-white rounded-t-2xl shadow-lg ">
        <div className="py-12 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-quicksand">
            Recipes of the Day
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {recipe.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

