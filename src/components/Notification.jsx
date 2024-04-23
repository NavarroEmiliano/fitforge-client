/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false)

  const notification = useSelector(state => state.notification)

  useEffect(() => {
    if (notification) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }
  }, [notification])

  if (!notification) {
    return null
  }

  return (
    <div
      className={`fixed top-0 left-0 z-10 w-full flex justify-center transition-transform duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className={`${
          notification.status === 'OK' ? 'bg-green-500' : 'bg-red-600'
        } text-white px-8 py-4 rounded-md shadow-lg`}
      >
        <p>{notification?.message}</p>
      </div>
    </div>
  )
}

export default Notification
