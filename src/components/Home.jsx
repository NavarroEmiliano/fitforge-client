import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-fitforge-black flex items-center justify-center'>
      {/*       <div className='sm:h-[50%] sm:w-1/2 sm:flex sm:justify-center sm:items-center'>
        <div className='dumbbell-img'></div>
      </div> */}

      <div className='h-screen max-w-[224px] flex flex-col justify-around items-center'>
        <div>
          <h1 className='text-5xl text-fitforge-red text-bold mb-3'>
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
