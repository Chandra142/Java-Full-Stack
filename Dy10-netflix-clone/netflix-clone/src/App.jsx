import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { BrowserRouter ,  Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage/UserPage'


function App() {
 

  return (
    <div className="mainCtn">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/user-page' element={<UserPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
