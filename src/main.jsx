import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AppProvider} from "./context/selection.tsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <App />,
      },{
        path: '/about',
        element: <App />,
      },{
        path: '/services',
        element: <App />,
      },{
        path: '/contact',
        element: <App />,
      },{
        path: '/blog',
        element: <App />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppProvider>
  <RouterProvider router={router}/>  
  </AppProvider>
  </StrictMode>,
)
