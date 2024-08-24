import React from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';


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
      <SearchBar/>
    </div>
 
  )
}

export default App
