import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {

  return (
    <div>
      <FormikForm/>
      <RegistrationForm/>
      
    </div>
  )
}

export default App
