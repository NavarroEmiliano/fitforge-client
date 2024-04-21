import { useField } from '../hooks/index'
import usersService from '../services/usersService'

const SignUpForm = () => {
  const userName = useField('text')
  const email = useField('email')
  const password = useField('password')
  const repeatPassword = useField('password')

  const onSubmit = async event => {
    console.log(password.value, repeatPassword.value)
    event.preventDefault()
    if (password.value === repeatPassword.value) {
      const userForSignUp = {
        email: email.value,
        userName: userName.value,
        password: password.value
      }

      await usersService.signUpUser(userForSignUp)
    }
  }

  return (
    <div className='w-full h-screen bg-fitforge-black flex flex-col justify-center items-center text-white p-10'>
      <div className='flex flex-col mb-8 justify-center items-center'>
        <div className='dumbbell-img w-[80px] h-[80px] mb-4'></div>
        <p className='text-3xl text-fitforge-red mt-1'>Create Account</p>
      </div>
      <form
        onSubmit={onSubmit}
        className='max-w-[260px] rounded-lg border-secondary-color'
      >
        <label className='text-fitforge-blue' htmlFor='username'>
          USERNAME
        </label>
        <input
          className='w-full bg-fitforge-black py-1 mb-8 border-b-2 border-fitforge-red focus:outline-none'
          {...userName}
          name='username'
        />

        <label className='text-fitforge-blue' htmlFor='email'>
          EMAIL
        </label>
        <input
          className='w-full bg-fitforge-black py-1 mb-8 border-b-2 border-fitforge-red focus:outline-none'
          {...email}
          name='email'
        />

        <label className='text-fitforge-blue' htmlFor='password'>
          PASSWORD
        </label>
        <input
          className='w-full bg-fitforge-black py-1 mb-8 border-b-2 border-fitforge-red focus:outline-none'
          {...password}
          name='password'
        />

        <label className='text-fitforge-blue' htmlFor='repeatPassword'>
          REPEAT PASSWORD
        </label>
        <input
          className='w-full bg-fitforge-black py-1 mb-8 border-b-2 border-fitforge-red focus:outline-none'
          {...repeatPassword}
          name='repeatPassword'
        />

        <div className='w-full flex justify-center'>
          <button className='w-full border-2 border-fitforge-red text-fitforge-red font-medium py-3  my-3 rounded-lg active:bg-fitforge-red active:text-fitforge-black'>
            Sign Up
          </button>
        </div>
      </form>
      <p className='text-fitforge-blue mt-2'>
        Already you have an account? <strong>Login</strong>
      </p>
    </div>
  )
}

export default SignUpForm
