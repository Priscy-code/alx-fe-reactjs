import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Profile from './components/Profile'
import BlogPost from './components/BlogPost'
import { useAuth } from './assets/contexts/AuthContext'
import ProtectRoute from './components/ProtectedRoute'

const Login = () => {
  const {login } = useAuth();

  return(
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  )
}
function App() {

  return (
    <>
     <Router>
       <Routes>
          <Route path = "/login" element = {<Login />}/>
          <Route element = {<ProtectRoute/>}/>
          <Route path='/profile' element = {<Profile />}/>
          <Route path='details' element = {<ProfileDetails />}/>
          <Route path='settings' element ={<ProfileSettings />}/>

          <Route path='/blog/:id' element = {<BlogPost />}></Route>
       </Routes>

     </Router>
    </>
  )
}

export default App
