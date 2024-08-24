import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterRecipes(term);
    }

    return(
        <input type="text"
        placeholder="Search recipes..." 
        value={searchTerm}
        onChange={handleSearch}/>
    );
}

export default SearchBar