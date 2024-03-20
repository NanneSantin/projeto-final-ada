import styles from './Header.module.css';
import Logo from '../Logo';
import LogoutButton from '../LogoutButton';
import ShoppingCart from '../ShoppingCartButton';

interface IHeaderProps {
    onSearch: (term: string) => void;
}

const Header: React.FC<IHeaderProps> = ({ onSearch }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        onSearch(term);
    }

    return (<header>
        <div className={styles.container_logo}>
            <Logo width={80}></Logo>
        </div>
        <div className={styles.container_search}>
            <img src='src/assets/images/lupa.svg' alt='Lupa' width={'20px'} />
            <input type="text" title='search' placeholder='Buscar' onChange={handleSearch} />
        </div>
        <div className={styles.container_icons}>
            <LogoutButton />
            <ShoppingCart />
        </div>
    </header>)
}

export default Header;