import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
/* import { store } from './app/store' */

import Home from './components/Home.jsx'
import SignUpForm from './components/SignUpForm.jsx'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/signup',
    element: <SignUpForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
/*   <Provider store={store}> */
    <RouterProvider router={router} />
/*   </Provider> */
)
