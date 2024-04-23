import { Link } from "react-router-dom"

const CustomLink = ({to,img,text}) => {
  return (
    <Link
    to={to}
    className='
    text-center h-full  flex flex-col justify-around p-2'
  >
    <div className={`bg-user-red-img bg-contain bg-no-repeat bg-center  h-[40%]`}></div>
    <p className='text-fitforge-red'>{text}</p>
  </Link>
  )
}

export default CustomLink