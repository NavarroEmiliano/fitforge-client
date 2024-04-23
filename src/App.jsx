import { useSelector } from 'react-redux'
import BottomNav from './components/BottomNav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignUpForm from './components/signUpForm/SignUpForm'
import LoginForm from './components/LoginForm'

const App = () => {
  const user = useSelector(state => state.user)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUpForm/>} />
          <Route path='/login' element={<LoginForm/>} />
        </Routes>
      </Router>
      {user?.userName && <BottomNav/>}
    </div>
  )
}

export default App
