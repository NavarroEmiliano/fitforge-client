export const validation = (userData, users) => {
  const { userName, email, password, repeatPassword } = userData

  const errors = {}

  if (!userName) errors.userName = 'input cannot be empty'

  if (userName.length < 3 || userName.length > 20)
    errors.userName = '3-20 characters required'

  if (!/^[a-zA-Z]+$/.test(userName)) errors.userName = 'Only letters'

  if (!email) errors.email = 'input cannot be empty'

  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    errors.email = 'Not a valid email'
  }

  if (email.length > 35) {
    errors.email = 'Email cannot exceed 35 characters'
  }

  if (users.some(user => user.email === email))
    errors.email = 'This email is already registered'

  if (!password) errors.password = 'input cannot be empty'

  if (!/\d/.test(password)) {
    errors.password = 'Must include at least one number'
  }

  if (!/[a-zA-Z]/.test(password)) {
    errors.password = 'Must include at least one letter'
  }

  if (!(password.length < 16)) {
    errors.password = 'Must be less than 16 characters'
  }

  if (!(password.length > 5)) {
    errors.password = 'Must be more than 5 characters'
  }

  if (!repeatPassword) errors.repeatPassword = 'input cannot be empty'

  if (repeatPassword !== password)
    errors.repeatPassword = 'Passwords do not match'

  return errors
}

export const isFormValid = (userData, errors) => {
  return (
    !userData.email ||
    !userData.password ||
    !userData.userName ||
    !userData.repeatPassword ||
    Object.keys(errors).length > 0
  )
}


