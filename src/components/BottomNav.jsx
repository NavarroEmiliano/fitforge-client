import CustomLink from "./CustomLink"

const BottomNav = () => {
  return (
    <div className='absolute bg-fitforge-black w-full h-[76px] bottom-0 shadow-shadow-top '>
        <div className='flex items-center justify-around h-[76px] w-full'>
            <CustomLink activeImg='user-red' disabledImg='user-gray' text='Profile' to='/profile'/>
            <CustomLink activeImg='dumbbell-red' disabledImg='dumbbell-gray' text='Exercises' to='/exercises'/>
        </div> 
      </div>
  )
}

export default BottomNav