import { useState } from 'react'
import loginService from '../services/loginService'
import Notification from './Notification'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: ''
  })

  const [notification, setNotification] = useState(null)

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

    const response = await loginService.loginUser(userForLogin)

    setNotification({
      status: response.status,
      message:
        response.status === 'FAILED'
          ? response.data
          : 'Login successful, please wait...'
    })

    if (response.status === 'OK') {
      setLoginInputs({
        email: '',
        password: ''
      })
    }
  }

  const disabledSubmit = !loginInputs.email || !loginInputs.password

  return (
    <div className='w-full h-screen bg-fitforge-black flex flex-col justify-center items-center text-white p-10'>
      <Notification notification={notification} />

      <div className='flex flex-col mb-8 justify-center items-center'>
        <div className='dumbbell-img w-[80px] h-[80px] mb-4'></div>
        <p className='text-3xl text-fitforge-red mt-1'>Log In</p>
      </div>
      <form
        onSubmit={onSubmit}
        className='max-w-[260px] rounded-lg border-secondary-color'
      >
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
  )
}

export default LoginForm
