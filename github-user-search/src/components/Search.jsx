import React from 'react'
import { useState } from 'react'
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    

    const handleInputChange = (event) => {
       setUsername(event.target.value);
    }

    const handleSearch = async () => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        

        try{
            const data = await fetchUserData(username);
            setUserData(data);
        }catch(error){
            setError("Looks like we cant find the user.")
        }finally{
            setLoading(false);
        }
    }


  return (
    <div>
        <h1>Search GitHub User </h1>
        <form onSubmit={handleSearch}>
            <input type="text"
             placeholder='Enter GitHub username'
             value={username}
             onChange={handleInputChange} />
             <button type='submit'>Search</button>
        </form>

        {loading && <p>Loading..</p>}
        {error && <p>{error}</p>}
        {userData && (
            <div>
                <h2>{userData.name}</h2>
                <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
                <p>
                    <a href={userData.html_url} target = "_blank" rel='noopener no referrer'> View Profile</a>
                </p>
                </div>
        )}
    </div>
  )
}

export default Search