import { createSlice } from '@reduxjs/toolkit'
import { setNotificationAction } from '../notification/notificationSlice'
import loginService from '../../services/loginService'

const initialState = null

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
    logoutUser: () => null
  }
})

export const { setUser, logoutUser } = userSlice.actions

export const loginUserAction = credentials => async dispatch => {
  try {
    const response = await loginService.loginUser(credentials)
    window.localStorage.setItem(
      'loggedFitForgeUser',
      JSON.stringify(response.data)
    )
    dispatch(setUser(response.data))

    dispatch(
      setNotificationAction({
        status: response.status,
        message: 'Login successful, please wait...'
      })
    )
  } catch (error) {

    dispatch(
      setNotificationAction({
        message: error.response.data.data,
        status: 'FAILED'
      })
    ) 
  }
}

export default userSlice.reducer
