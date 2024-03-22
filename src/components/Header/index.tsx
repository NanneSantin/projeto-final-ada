import styles from './Header.module.css';
import Logo from '../Logo';
import LogoutButton from '../LogoutButton';
import ShoppingCart from '../ShoppingCartButton';
import { ChangeEvent } from 'react';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

interface IHeaderProps {
    onSearch?: (term: string) => void;
}

const Header: React.FC<IHeaderProps> = ({ onSearch }) => {
    const { cartItemCount } = useShoppingCartContext();

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        if (onSearch) {
            onSearch(term);
        }
    };


    return (
        <header>
            <div className={styles.container_logo}>
                <Logo width={80} />
            </div>
            {onSearch && (
                <div className={styles.container_search}>
                    <img src='src/assets/images/lupa.svg' alt='Lupa' width={20} />
                    <input type="text" title='search' placeholder='Buscar' onChange={handleSearch} />
                </div>
            )}
            {!onSearch && (
                <div>
                    <h1 className={styles.title}>Mundo das Letras</h1>
                </div>
            )}
            <div className={styles.container_icons}>
                <LogoutButton />
                <ShoppingCart itemCount={cartItemCount} />
            </div>
        </header>
    );
}

export default Header;