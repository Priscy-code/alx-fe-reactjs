import { useState } from "react";

const RegistrationForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();

        let formError ={};
        if( !username) {
            errors.username ("Username is required"); return};
        if(!email) {
            errors.email ("Email is required "); return};
        if(!password) {
            errors.password ("password is required "); return};


        console.log('Username: ', username);
        console.log('Email:', email);
        console.log('Password: ', password)



        if (Object.keys(formError).length>0){
            setErrors(formError);
        }else{
            setErrors({});

            alert('form submitted successfully ')
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
