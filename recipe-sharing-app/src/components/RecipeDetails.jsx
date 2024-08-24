import useRecipeStore from "../components/recipeStore.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RecipeDetails = ({recipeId}) => {
    const recipe = useRecipeStore (state =>
        state.recipes.find(recipe => recipe.id === recipeId));


return(
    <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/*Render EditRecipeForm and DeleterRecipeButton here */}
        <Router>
            <Routes>
                <Route path="/recipes/:id"></Route>
            </Routes>
        </Router>
    </div>
)
};
export default RecipeDetails