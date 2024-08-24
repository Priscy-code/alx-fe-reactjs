import useRecipeStore from "../components/recipeStore.js";

const RecipeList = () => {
    const {recipes, filteredRecipes}= useRecipeStore(
        state => ({recipes: state.recipes, filteredRecipes: state.filteredRecipes})
    );
    const filteredList = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return(
        <div>
            {recipes.map(recipe => (
                <div key ={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>

                    <ul>
                        <li key = {recipe.id}>{recipe.title}</li>
                    </ul>

                </div>
                
            ))}


        </div>
    )
}
export default RecipeList