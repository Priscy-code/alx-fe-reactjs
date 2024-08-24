import {create} from 'zustand'

const useRecipeStore = create(set => ({
    recipes:[],
    favorites:[],
    addFavorite: (recipedId) => set(state => ({
      favorites: [...state.favorites, recipedId]
    })), 
    removeFavorite: (recipedId) => set(state => ({
      favorites:state.favorites.filter(id => id !== recipedId)
    })), 
    recommendations: [],
    generateRecommendation: () => set(state => {
      const recommended = state.recipes.filter(recipe => 
        state.favorites.includes(recipe.id) && Math.random() >0.5
      );
      return {recommendations: recommended}
    }),
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

