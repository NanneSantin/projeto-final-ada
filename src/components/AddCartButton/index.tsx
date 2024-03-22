import styles from './AddCart.module.css'
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

export default function AddCart() {
    const { addToCart } = useShoppingCartContext();

    const handleAddShopCart = () => {
        addToCart();
    }

    return (
        <div className={styles.carrinho} onClick={handleAddShopCart} title='Add ao carrinho de compras'>
            <img src='src/assets/images/addCart.svg' alt='Carrinho de Compras' width={'38px'} />
        </div>
    )
}