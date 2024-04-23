import CustomLink from "./CustomLink"

const BottomNav = () => {
  return (
    <div className='absolute w-full h-[76px] bottom-0 shadow-shadow-top '>
        <div className='flex items-center justify-around h-[76px] w-full'>
            <CustomLink img='user-red-img' text='Profile' to='/profile'/>
        </div> 
      </div>
  )
}

export default BottomNav