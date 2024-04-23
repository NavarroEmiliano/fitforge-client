import { Link } from 'react-router-dom'

const LandingPage = () => {



  return (
    <div className='w-full h-screen px-12 py-20 bg-fitforge-black flex items-center justify-center'>
      <div className='h-full  w-full flex flex-col justify-between items-center'>
        <div>
          <h1 className='text-7xl text-fitforge-red text-bold mb-3'>
            Welcome to FitForge
          </h1>
          <p className=' text-fitforge-blue'>Train more effectively.</p>
          <p className=' text-fitforge-blue'>Experience better outcomes.</p>
        </div>

        <div className='flex flex-col w-full'>
          <Link
            to='/signup'
            className='border-2 text-center border-fitforge-red text-fitforge-red font-medium py-3 my-3 rounded-lg  duration-100'
          >
            <button>Sign up</button>
          </Link>

          <Link
            to='login'
            className='
            border-2 text-center border-fitforge-red  text-fitforge-black bg-fitforge-red font-medium py-3  my-3 rounded-lg active:scale-[0.98] duration-100'
          >
            <button>Log In</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
