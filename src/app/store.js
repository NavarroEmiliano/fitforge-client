import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import userReducer from '../features/user/userSlice'
import notificationReducer from '../features/notification/notificationSlice'

export const store = configureStore({
  reducer: {
    user: userReducer ,
    users:usersReducer,
    notification: notificationReducer
  },
})