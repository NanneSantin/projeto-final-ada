import { useNavigate } from 'react-router-dom';

export default function AddCart() {
    const navigate = useNavigate();

    const handleAddShopCart = () => {
        navigate('/');
    }

    return (
        <div onClick={handleAddShopCart} title='Carrinho de Compras'>
            <img src='src/assets/images/addCart.svg' alt='Carrinho de Compras' width={'38px'} />
        </div>
    )
}