import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import SignUpForm from '../components/signUpForm/SignUpForm'
import LoginForm from '../components/LoginForm'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/signup',
    element: <SignUpForm />
  },
  {
    path: '/login',
    element: <LoginForm />
  }
])
