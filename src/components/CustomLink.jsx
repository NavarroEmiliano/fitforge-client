/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'

const CustomLink = ({ to, activeImg, disabledImg, text }) => {
  const { pathname } = useLocation()
  const isActive = pathname === to

  const backgroundImageStyle = {
    backgroundImage: `url('/src/assets/${
      isActive ? activeImg : disabledImg
    }.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '50%'
  }

  return (
    <Link
      to={to}
      className='text-center h-full flex flex-col justify-around p-2'
    >
      <div style={backgroundImageStyle}></div>
      <p className={isActive ? 'text-fitforge-red' : 'text-fitforge-gray'}>
        {text}
      </p>
    </Link>
  )
}

export default CustomLink
