import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import food2 from "../assets/food2.jpg";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // A function to handle fetching the recipes
  const fetchNewRecipes = () => {
    setIsLoading(true); // Start loading
    fetch(
  `https://api.spoonacular.com/recipes/random?number=3&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
)

      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes || []))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false)); 
  };

  useEffect(() => {
   
    fetchNewRecipes();
  }, []);

  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${food2})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center pl-16">
          <div>
            <h1 className="text-6xl font-quicksand font-bold text-yellow-400 drop-shadow-lg">
              Unlock Your Recipe
            </h1>
            <p className="mt-4 text-2xl font-lora text-emerald-300 drop-shadow-md">
              Discover new dishes every day
            </p>
            {/* The new clickable button */}
            <button
              onClick={fetchNewRecipes}
              className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? 'Loading...' : 'Discover New Dishes'}
            </button>
          </div>
        </div>
      </div>

      {/* Recipe Section */}
      <div className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 font-quicksand">
          Recipe of the Day
        </h2>
        {/* Conditionally render based on loading state */}
        {isLoading ? (
          <p className="text-lg">Loading new recipes...  </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="card bg-base-100 shadow-xl hover:scale-105 transition"
              >
                <figure>
                  <img src={recipe.image} alt={recipe.title} />
                </figure>
                <div className="card-body">
                  <h3 className="card-title font-quicksand">{recipe.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}