import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/Layout/Main'
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Order from './Components/Order';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path: '/order',
        element: <PrivateRoute><Order/></PrivateRoute>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login/>
      },
    ]
  }]);
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
