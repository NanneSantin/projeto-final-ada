import styles from './CardsBook.module.css';
import AddCart from '../AddCartButton';
import Book from '../../Interfaces/book';

const CardBook = ({ id, title, author, image, price }: Book) => {

    const currencyFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return (
        <div className={styles.container_card} id={id}>
            <div>
                <h2>{title}</h2>
                <p>{author}</p>
            </div>

            <img className={styles.img_book} src={image} alt="Capa do livro" width='170px' />

            <div className={styles.buy}>
                <h3 className={styles.price}>{currencyFormat.format(price)}</h3>
                <AddCart />
            </div>
        </div>
    )
}

export default CardBook;