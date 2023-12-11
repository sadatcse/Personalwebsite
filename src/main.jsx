import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HelmetProvider } from 'react-helmet-async';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();



import Root from './components/Root';
import AuthProvider from './providers/AuthProvider';






import Login from './components/Authentication/Login';


import Home from './components/Page/Home';
import Error404 from './components/Page/Error404';
import About from './components/Page/About';
import Blog from './components/Page/Blog';
import Portfolio from './components/Page/Portfolio';
import Service from './components/Page/Service';
import Contact from './components/Page/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'/portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
       
    ]
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </HelmetProvider>
      </QueryClientProvider>
      </React.StrictMode>,
)

