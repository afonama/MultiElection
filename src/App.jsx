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
import ConfirmVote from './components/ConfirmVote';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'results', element: <Results /> },
      { path: 'elections', element: <Elections /> },
      { path: 'elections/:id', element: <ElectionDetails /> },
      { path: 'elections/:id/candidates', element: <Candidates /> },
      { path: 'congrats', element: <Congrats /> },
      { path: 'logout', element: <Logout /> },
      { path: 'login', element: <Login /> },
      { path: 'errorpage', element: <ErrorPage /> },
      // FIX: Move ConfirmVote inside children to access Outlet Context
      { path: 'ConfirmVote/:electionId/:id', element: <ConfirmVote /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;