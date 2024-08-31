import { useState } from "react";

const RegistrationForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        let formError ={};
        if(!username) formError.username = "Username is required";
        if(!email) formError.email = "Email is required ";
        if(!password) formError.password = "password is required "
    }
     return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username" />
            <input type="text"
            value={email}
            onChange={(e) => setEmail (e.target.value)}
            placeholder="Enter email" />
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password" />

            <button onSubmit="submit"> Submit</button>
        </form>
     )
}
export default RegistrationForm
