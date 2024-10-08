import useRecipeStore from "../components/recipeStore,js"


const RecommendationList =() => {
    const recommendations = useRecipeStore(state => state.recommendations);


    return (
        <div>
            <h2>Recommendation</h2>
            {recommendations.map (recipe => (
                <div key = {recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description }</p>

                </div>
            ))}
        </div>
    )
}

export default RecommendationList