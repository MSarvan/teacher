import './App.css'
import { Routes, Route } from "react-router-dom"
import { Home } from './Components/Home'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import { Teacherdetails } from './Components/Teacherdetails'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/details' element={<Teacherdetails/>}/>
      </Routes>
    </div>
  )
}

export default App
