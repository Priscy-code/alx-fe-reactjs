import axios, { Axios } from "axios"

const fetchUserData = async(username) => {
    try{
        const url = `https://api.github.com/users/{username}`
        const response = await axios.get(url);

        return response.data;
    }catch(error){
        console.error ("Error fetching user data:", error);
    }

}

export default fetchUserData;