import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import Sign from './component/Sign.jsx';
import LogIn from './component/LogIn.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import CoffeeUser from './component/CoffeeUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // read
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:'addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    // update
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/signUp',
    element:<Sign></Sign>
  },
  {
    path:'/logged',
    element:<LogIn></LogIn>
  },
  {
    path:'/coffeeUsers',
    element:<CoffeeUser></CoffeeUser>,
    // read user
    loader: ()=>fetch('http://localhost:5000/userCoffee')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
