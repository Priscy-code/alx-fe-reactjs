import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useRecipeStore(
        (state) => ({searchTerm: state.searchTerm, setSearchTerm: state.setSearchTerm})
    )
   

    return(
        <input type="text"
        placeholder="Search recipes..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
    );
}

export default SearchBar