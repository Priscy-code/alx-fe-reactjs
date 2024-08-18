import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav style={{backgroundColor: 'red', textAlign:'center', flex:'display', justifyContent:"center" }}>
            <ul>
                <li style={{color: 'blue', textAlign: 'center'}}>
                    <Link to= "/">Home</Link>
                </li>
                <li style={{color:'black'}}>
                    <Link to= '/About'>About</Link>
                </li>
                <li style={{color: 'pink'}}>
                    <Link to= '/Services'>Service</Link>
                </li>
                <li style = {{color:'brown'}}>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar