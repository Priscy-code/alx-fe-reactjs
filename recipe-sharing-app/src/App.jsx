import React from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'


const App = () => {
  return (
    <div>
      <RecipeList/>
      <AddRecipeForm/>
      {/* <RecipeDetails/> */}

              <Router>
            <Routes>
                <Route path="/recipes/:id" element ={<RecipeDetails />}/>
            </Routes>
        </Router>
      
    </div>
 
  )
}

export default App
