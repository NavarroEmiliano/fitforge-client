import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen p-8 bg-fitforge-black flex items-center justify-center'>

      <div className='h-full border-2 w-full flex flex-col justify-between items-center'>
        <div>
          <h1 className='text-7xl text-fitforge-red text-bold mb-3'>
            Welcome to FitForge
          </h1>
          <p className=' text-fitforge-blue'>Train more effectively.</p>
          <p className=' text-fitforge-blue'>Experience better outcomes.</p>
        </div>

        <div className='flex flex-col w-full'>
          <button className='border-2 border-fitforge-red text-fitforge-red font-medium py-3 my-3 rounded-lg active:bg-fitforge-red active:text-fitforge-black'>
            <Link to='signup'>Sign up</Link>
          </button>
          <button
            className='
            border-2 border-fitforge-red text-fitforge-red font-medium py-3  my-3 rounded-lg active:bg-fitforge-red active:text-fitforge-black'
          >
            <Link to='login'>Log In</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
