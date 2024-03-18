import { createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

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
]);

export default router;