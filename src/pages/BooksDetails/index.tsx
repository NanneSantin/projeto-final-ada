import styles from './BooksDetails.module.css';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import useBooksDetails from '../../hooks/useBooksDetails';
import ShoppingCart from '../../components/ShoppingCartButton';

export default function Details() {
    const { currentBookDetail } = useBooksDetails();
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/');
    }

    const currencyFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const newPrice = currentBookDetail.price === 0 ? 'Indisponível' : currencyFormat.format(currentBookDetail.price)

    return (
        <div className={styles.container_details}>
            <Header />
            <div className={styles.back} onClick={handleNavigate}>
                <img src='src/assets/images/back.svg' alt='Voltar' width={'20px'} />
                <p>Voltar</p>
            </div>
            <div className={styles.container_main}>
                <div className={styles.card_book}>
                    <img src={currentBookDetail.image} alt="Capa do Livro" />
                    <p className={styles.price}>{newPrice}</p>
                </div>
                <div className={styles.description_book}>
                    <h2>{currentBookDetail.title}</h2>
                    <h3>{currentBookDetail.author}</h3>
                    <p><strong>Editor:</strong> {currentBookDetail.publisher}</p>
                    <p><strong>Número de páginas:</strong> {currentBookDetail.pageCount} pgs</p>
                    <p>{currentBookDetail.description}</p>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.cart}>
                    <ShoppingCart />
                </div>
                <a title='Pré Visualização do Livro' href={currentBookDetail.previewLink} target='_blank'>Preview Livro</a>
                <a title='Comprar Ebook pela Google Play' href={currentBookDetail.buyLink} target='_blank'>Comprar Direto</a>
            </div>
        </div>
    )
}
