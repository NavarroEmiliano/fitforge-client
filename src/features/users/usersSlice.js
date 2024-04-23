import { createSlice } from '@reduxjs/toolkit'
import usersService from '../../services/usersService'
import { setNotificationAction } from '../notification/notificationSlice'

const initialState = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => action.payload,
    addUser:(state, action) => [...state, action.payload],
  }
})

export const { setUsers,addUser } = usersSlice.actions

export const setUsersAction = () => async dispatch => {
  const {data} = await usersService.getAllUsers()
  dispatch(setUsers(data))
}

export const createUserAction = credentials => async dispatch => {
  try {
    const response = await usersService.signUpUser(credentials)
    dispatch(addUser(response.data))
    dispatch(
      setNotificationAction({
        status: response.status,
        message: 'Congratulations, your account has been sucessfully created.'
      })
    )
  } catch (error) {
    dispatch(
      setNotificationAction({
        message: error.response.data.error,
        type: 'FAILED'
      })
    )
  }
}

export default usersSlice.reducer
