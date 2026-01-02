function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.title} className="card-img" />
      <h3 className="card-title">{recipe.title}</h3>
      <p className="card-summary">{recipe.summary}</p>
      <div className="card-info">
        <span className="card-servings">{recipe.servings} servings</span>
        <span className="card-ready-in">{recipe.readyInMinutes} minutes</span>
      </div>
    </div>
  )
}
export default RecipeCard;