import { useQuery } from '@tanstack/react-query'
import usersService from '../../services/usersService'
import { useEffect, useState } from 'react'
import { validation, isFormValid } from './validations'
import Notification from '../Notification'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const [errors, setErrors] = useState({})

  const [notification, setNotification] = useState(null)

  const users = useQuery({
    queryKey: ['users'],
    queryFn: usersService.allUsers
  })

  const handleInput = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  const disabledSubmit = isFormValid(userData, errors)

  const onSubmit = async event => {
    event.preventDefault()

    const userForRegister = {
      userName: userData.userName,
      email: userData.email,
      password: userData.password
    }

    const response = await usersService.signUpUser(userForRegister)

    if (response.status === 'OK') {
      setNotification({
        status: response.status,
        message: 'Congratulations, your account has been sucessfully created.'
      })
      setUserData({
        userName: '',
        email: '',
        password: '',
        repeatPassword: ''
      })

      setTimeout(() => {
        setNotification(null)
      }, 3000)
    }
  }

  useEffect(() => {
    if (users.data) setErrors(validation(userData, users.data.data))
  }, [userData])

  console.log(errors)

  return (
    <div className='w-full h-screen px-12 py-20 bg-fitforge-black flex items-center justify-center'>
      <Notification notification={notification} />

      <div className='h-full w-full  flex flex-col justify-between items-center'>
        <div className='flex flex-col  mb-4 justify-center items-center'>
          <div className='dumbbell-img w-[80px] h-[80px] '></div>
          <p className='text-2xl text-fitforge-red mt-1'>Create Account</p>
        </div>
        <form onSubmit={onSubmit} className='w-full text-white'>
          <div>
            <label className='text-sm text-fitforge-blue' htmlFor='username'>
              USERNAME
            </label>
            <input
              className='w-full bg-fitforge-black  border-b-2 border-fitforge-red focus:outline-none'
              name='userName'
              onChange={handleInput}
              value={userData.userName}
            />
            <p className='h-[10px] text-red-600 mb-4'>
              {userData.userName && errors.userName}
            </p>
          </div>

          <div>
            <label className='text-sm text-fitforge-blue' htmlFor='email'>
              EMAIL
            </label>
            <input
              className='w-full bg-fitforge-black border-b-2 border-fitforge-red focus:outline-none'
              name='email'
              onChange={handleInput}
              value={userData.email}
            />
            <p className='h-[10px] text-red-600 mb-4'>
              {userData.email && errors.email}
            </p>
          </div>

          <div>
            <label className='text-sm text-fitforge-blue' htmlFor='password'>
              PASSWORD
            </label>
            <input
              className='w-full bg-fitforge-black border-b-2 border-fitforge-red focus:outline-none'
              name='password'
              type='password'
              onChange={handleInput}
              value={userData.password}
            />

            <p className='h-[10px] text-red-600 mb-4'>
              {userData.password && errors.password}
            </p>
          </div>

          <div>
            <label
              className='text-sm text-fitforge-blue'
              htmlFor='repeatPassword'
            >
              REPEAT PASSWORD
            </label>
            <input
              className='w-full bg-fitforge-black border-b-2 border-fitforge-red focus:outline-none'
              name='repeatPassword'
              type='password'
              onChange={handleInput}
              value={userData.repeatPassword}
            />

            <p className='h-[10px] text-red-600 mb-4'>
              {userData.repeatPassword && errors.repeatPassword}
            </p>
          </div>

          <div className='w-full flex justify-center'>
            <button
              disabled={disabledSubmit}
              className='w-full border-2 border-fitforge-red text-fitforge-red font-medium py-3  my-3 rounded-lg active:bg-fitforge-red active:text-fitforge-black disabled:border-gray-600 disabled:text-gray-600 disabled:active:bg-gray-600 disabled:active:text-fitforge-black'
            >
              Sign Up
            </button>
          </div>
        </form>
        <Link to='/login' className='cursor-pointer'>
          <p className='text-fitforge-blue mt-2'>
            Already you have an account? <strong>Login</strong>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default SignUpForm
