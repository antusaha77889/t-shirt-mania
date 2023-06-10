import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Grandpa from './Components/Grandpa/Grandpa';


function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <Main></Main> ,
       children:[
        {
          path:'/',
          loader:() => fetch('tshirt.json'),
          element:<Home></Home>
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'/grandpa',
          element:<Grandpa></Grandpa>
        }
       ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
