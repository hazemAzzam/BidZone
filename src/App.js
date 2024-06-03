import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Register from './Components/Register/Register';
import Layout from './Components/Layout/Layout';

const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {path: 'register', element: <Register />},
  ]},
])

function App() {
  return <RouterProvider router={router} />

}

export default App;
