import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Results from './pages/Results';
import Elections from './pages/Elections';
import Candidates from './pages/Candidates';
import ElectionDetails from './pages/ElectionDetails';
import Congrats from './pages/Congrats';
import Logout from './pages/Logout';
import ConfirmVote from './components/ConfirmVote'; // <-- import ConfirmVote
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'results',
        element: <Results />
      },
      {
        path: 'elections',
        element: <Elections />
      },
      {
        path: 'elections/:id',
        element: <ElectionDetails />
      },
      {
        path: 'elections/:id/candidates',
        element: <Candidates />
      },
      {
       path: 'ConfirmVote/:id',
      element: <ConfirmVote />
      },

      {
        path: 'congrats',
        element: <Congrats />
      },
      {
        path: 'Logout',
        element: <Logout />
      },
      {
        path: 'ErrorPage',
        element: <ErrorPage />
      },
      {
        path: 'Login',
        element: <Login />
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
