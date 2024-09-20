import React from 'react'
import { useState } from 'react'
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [repository, setRepository] = useState('');
    

    const handleInputChange = (event) => {
       setUsername(event.target.value);
    }
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }
    const handleRepository = (event) => {
        setRepository(event.target.value)
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
    <div className='max-w-xl mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Search GitHub User </h1>
        <form onSubmit={handleSearch} className='bg-pink-100 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            
            <input type="text"
             placeholder='Enter GitHub username'
             value={username}
             onChange={handleInputChange} 
             className='shadow appearance-none border rounded w-full py-2 px-3 text=gray-700 leading-tight focus:outline-none focus:shadow-outline'/>

             <input type="text"
             placeholder='Enter location'
             value={location}
             onChange={handleLocation} 
             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focud:shadow-outline'/>

             <input type="text"
             value={repository}
             onChange={handleRepository} 
             placeholder='Enter repository title '
             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focud:shadow-outline'/>

             <div className='flex item-center justify-between'>
                <button type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline focus:shadow-outline'>
                    Search</button>
             </div>
        </form>

        {loading && <p className='text-center text-gray-500'>Loading..</p>}
        {error && <p className='text-center text-red-599'>{error}</p>}
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