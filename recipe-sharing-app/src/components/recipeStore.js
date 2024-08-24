import {create} from 'zustand'

const useRecipeStore = create(set => ({
    recipes:[],
    searchTerm: '',
    setSearchTerm: (term) => set ({ searchTerm: term}),
    filteredRecipes: [],
    filteredRecipes:() => set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),
    updateRecipe: (newRecipe) => set(state => ({
      recipes: [...state.receipes, newRecipe]
    })),
    addRecipe:(newRecipe) => set(state => ({
        receipes: [...state.recipes, newRecipe]
    })), 
    deleteRecipe:id => set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id)
    })),
    setRecipes: (recipes) => set ({recipes})
}));

export default useRecipeStore

