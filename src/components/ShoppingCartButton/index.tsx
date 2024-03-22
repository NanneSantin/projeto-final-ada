import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const navigate = useNavigate();

    const handleShopCart = () => {
        navigate('/');
    }

    return (
        <div className='icon' onClick={handleShopCart} title='Add Carrinho de Compras'>
            <img src='src/assets/images/shopping-cart.svg' alt='Carrinho de Compras' width={'20px'} />
        </div>
    )
}