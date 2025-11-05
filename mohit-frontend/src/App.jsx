
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Navbar from './components/shared/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Campaigns from './components/Campaigns'
import Browse from './components/Browse'
import About from './components/About'
import Profile from './components/Profile'
import CreateCampaign from './components/CreateCampaign'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/Signup',
    element: <Signup/>
  },
  {
    path: '/Campaign',
    element: <Campaigns/>
  },
  {
    path: '/Browse',
    element: <Browse/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/createcampaign',
    element: <CreateCampaign/>
  },
  // {
  //   path: '/',
  //   element: <Home/>
  // },
  
])

function App() {

  return (
    <>
      <RouterProvider router = {appRouter} />
    </>
  )
}

export default App
