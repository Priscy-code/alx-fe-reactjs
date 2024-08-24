import useRecipeStore from "../components/recipeStore.js";
import DeleteRecipeButton from "./DeleteRecipeButton.jsx";
import EditRecipeForm from "./EditRecipeForm.jsx";

const RecipeDetails = ({recipeId}) => {
    const recipe = useRecipeStore (state =>
        state.recipes.find(recipe => recipe.id === recipeId));


return(
    <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipe={recipe}/>
        <DeleteRecipeButton recipeId={recipeId}/>

    </div>
)
};
export default RecipeDetails