import { useEffect, useState } from 'react'
import Notification from './Notification'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from '../features/user/userSlice'

const LoginForm = () => {
  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(state => state.user)

  const handleInput = event => {
    setLoginInputs({
      ...loginInputs,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = async event => {
    event.preventDefault()

    const userForLogin = {
      email: loginInputs.email,
      password: loginInputs.password
    }

    dispatch(loginUserAction(userForLogin))

    setLoginInputs({
      email: '',
      password: ''
    })
  }

  useEffect(() => {
    if (user)
      setTimeout(() => {
        navigate('/')
      }, 3000)
  }, [user])

  const disabledSubmit = !loginInputs.email || !loginInputs.password

  return (
    <div className='w-full h-screen px-12 py-20 bg-fitforge-black flex items-center justify-center'>
      <Notification />

      <div className='h-full w-full  flex flex-col justify-between items-center'>
        <div className='flex flex-col  mb-4 justify-center items-center'>
          <div className='dumbbell-img w-[80px] h-[80px] mb-4'></div>
          <p className='text-3xl text-fitforge-red mt-1'>Log In</p>
        </div>
        <form onSubmit={onSubmit} className='w-full text-white'>
          <label className='text-sm text-fitforge-blue' htmlFor='email'>
            EMAIL
          </label>
          <input
            className='w-full bg-fitforge-black py-1 mb-8 border-b-2 border-fitforge-red focus:outline-none'
            name='email'
            onChange={handleInput}
            value={loginInputs.email}
          />

          <label className='text-sm text-fitforge-blue' htmlFor='password'>
            PASSWORD
          </label>
          <input
            className='w-full bg-fitforge-black py-1 mb-8 border-b-2 border-fitforge-red focus:outline-none'
            name='password'
            type='password'
            onChange={handleInput}
            value={loginInputs.password}
          />

          <div className='w-full flex justify-center'>
            <button
              disabled={disabledSubmit}
              className='w-full border-2 border-fitforge-red text-fitforge-red font-medium py-3  my-3 rounded-lg active:bg-fitforge-red active:text-fitforge-black disabled:border-gray-600 disabled:text-gray-600 disabled:active:bg-gray-600 disabled:active:text-fitforge-black'
            >
              Log In
            </button>
          </div>
        </form>
        <Link to='/signup'>
          <p className='text-fitforge-blue mt-2'>
            Don’t have an account? <strong>Register</strong>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default LoginForm
