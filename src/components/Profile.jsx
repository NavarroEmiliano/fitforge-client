import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import CustomLink from './CustomLink'

const Profile = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/')
  }, [user])

  return (
    <div className='w-full h-screen bg-fitforge-black flex items-center justify-center'>
      <p className='text-white'>Profile</p>
    </div>
  )
}

export default Profile
