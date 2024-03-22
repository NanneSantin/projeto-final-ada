import { createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Details from '../pages/BooksDetails';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <AuthProvider><Login /></AuthProvider>
    },
    {
        path: '/',
        element: <AuthProvider>
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        </AuthProvider>
    },
    {
        path: '/details',
        element: <AuthProvider>
            <PrivateRoute>
                <Details />
            </PrivateRoute>
        </AuthProvider>
    },
]);

export default router;