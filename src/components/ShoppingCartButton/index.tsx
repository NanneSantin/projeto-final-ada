import { useNavigate } from 'react-router-dom';

interface IShoppingCartProps {
    itemCount: number;
}

export default function ShoppingCart({ itemCount }: IShoppingCartProps) {
    const navigate = useNavigate();

    const handleShopCart = () => {
        navigate('/');
    }

    return (
        <div className='icon' onClick={handleShopCart} title='Add Carrinho de Compras'>
            <img src='src/assets/images/shopping-cart.svg' alt='Carrinho de Compras' width={'20px'} />
            {itemCount > 0 && <span className="item-count">{itemCount}</span>}
        </div>
    )
}