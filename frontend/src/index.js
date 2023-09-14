import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// Import root route element
import Root from './routes/root';
// Import error page element
import ErrorPage from './error-page';
import Home from './routes/Home';
import SignInSide from './routes/SignInSide';
import SignUp from './routes/SignUp';
import Catalogo from './routes/Catalogo';
import Producto from './routes/Producto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'admin',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'inicio',
    element: <Home />,
  },
  {
    path: 'ingresar',
    element: <SignInSide />,
  },
  {
    path: 'registro',
    element: <SignUp />,
  },
  {
    path: 'catalogo',
    element: <Catalogo />,
  },
  {
    path: 'producto',
    element: <Producto />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
