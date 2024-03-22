import styles from './CardsBook.module.css';
import AddCart from '../AddCartButton';
import Book from '../../Interfaces/book';
import useBooksDetails from '../../hooks/useBooksDetails';
import { useNavigate } from 'react-router-dom';

type Props = {
    book: Book
}

const CardBook = ({ book }: Props) => {
    const navigate = useNavigate();
    const { handleInsertBook } = useBooksDetails();

    function handleBookDetail() {
        handleInsertBook(book);
        navigate('/details');
    }

    const currencyFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const newPrice = book.price === 0 ? 'Indisponível' : currencyFormat.format(book.price)

    return (
        <div className={styles.container_card} id={book.id}>
            <div>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </div>

            <img className={styles.img_book} onClick={handleBookDetail} src={book.image} alt="Capa do livro" width='170px' />

            <div className={styles.buy}>
                <h3 className={styles.price}>{newPrice}</h3>
                <AddCart />
            </div>
        </div>
    )
}

export default CardBook;