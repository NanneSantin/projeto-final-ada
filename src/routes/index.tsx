import { createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Details from '../pages/BooksDetails';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <AuthProvider><Login /></AuthProvider>
    },
    {
        path: '/',
        element: <AuthProvider>
            <PrivateRoute>
                <ShoppingCartProvider>
                    <Home />
                </ShoppingCartProvider>
            </PrivateRoute>
        </AuthProvider>
    },
    {
        path: '/details',
        element: <AuthProvider>
            <PrivateRoute>
                <ShoppingCartProvider>
                    <Details />
                </ShoppingCartProvider>
            </PrivateRoute>
        </AuthProvider>
    },
]);

export default router;