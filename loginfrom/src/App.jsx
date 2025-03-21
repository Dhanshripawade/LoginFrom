import React from 'react';
import { BrowserRouter,  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Dashboard from './pages/Dashboard/Dashboard'
import User from './components/SidebarPages/User';
import Product from './components/SidebarPages/Product';
import Blog from './components/SidebarPages/Blog';
import NotFound from './components/SidebarPages/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/signUp',
    element: <SignUp/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
{
  path:'/user',
  element:<User/>
},
{
  path:'/product',
  element:<Product/>
},
{
  path:'/blog',
  element:<Blog/>
},
{
  path:'/notfound',
  element:<NotFound/>
}
])

function App() {
  return (

    
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App