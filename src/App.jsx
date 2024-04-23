import BottomNav from './components/BottomNav'

import { Routes, Route, useNavigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignUpForm from './components/signUpForm/SignUpForm'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { Exercises } from './components/Exercises'
import { useEffect } from 'react'
import { setUser } from './features/user/userSlice'

const App = () => {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const userLogged = window.localStorage.getItem('loggedFitForgeUser')
    if (userLogged) {
      const user = JSON.parse(userLogged)
      dispatch(setUser(user))
    }
    navigate('/profile')
  }, [dispatch])

  return (
    <div>
      {user === null ? (
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      ) : (
        <div className='w-full h-screen bg-fitforge-black flex items-center justify-center'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/exercises' element={<Exercises />} />
          </Routes>
          {user?.userName && <BottomNav />}
        </div>
      )}
    </div>
  )
}

export default App
