import React from 'react'
import useRecipeStore from '../components/recipeStore.js'

const DeleteRecipeButton = ({recipeId}) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

    const handleDelete =() => {
        deleteRecipe(recipeId);
    }
  return (
    <div>
      <button onClick={handleDelete}> Delete Recipe</button>
    </div>
  )
}

export default DeleteRecipeButton
