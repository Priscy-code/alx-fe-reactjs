import { useState } from "react";

const RegistrationForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});


     const formError ={}; 

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!username) {
            errors.username ("Username must be at least 12 character long."); 
            return;
        };
        if (!email) {
            errors.email ("invalid email ");
            return
            };
        if (!password) {
            errors.password ("password must be at least 8 characters"); 
            return;
        };

        setErrors(formError)
        resetForm();

        console.log('Username: ', username);
        console.log('Email:', email);
        console.log('Password: ', password);

        const resetForm = () => {
            setUsername('');
            setEmail ('');
            setPassword('');
        }



    
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
