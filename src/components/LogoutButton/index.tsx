import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LogoutButton() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className='icon' onClick={handleLogout} title='Sair'>
            <img src='src/assets/images/logout.svg' alt='Sair' width={'20px'} />
        </div>
    )
}