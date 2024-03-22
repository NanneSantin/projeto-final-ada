import { useEffect, useState } from "react";
import Header from "../../components/Header"
import CardBook from "../../components/CardsBook";
import Book from "../../Interfaces/book";
import { booksApi } from "../../network/api";
import styles from './Home.module.css';

export default function Home() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [books, setBooks] = useState<Book[]>([]);
    const [showLoadMore, setShowLoadMore] = useState<boolean>(true);

    const loadBooks = async () => {
        try {
            const response = await booksApi.get('/', {
                params: {
                    q: 'programming',
                    startIndex: books.length,
                    maxResults: 24
                }
            });

            const newBooks = response.data.items.map((item: any) => (
                {
                    id: item.id,
                    title: item.volumeInfo.title,
                    author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Autor não disponível',
                    image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : './src/assets/images/content.jpeg',
                    price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 0,
                    publisher: item.volumeInfo.publisher ? item.volumeInfo.publisher : 'Publicação não disponível',
                    description: item.volumeInfo.description ? item.volumeInfo.description : 'Descrição não disponível',
                    pageCount: item.volumeInfo.pageCount ? item.volumeInfo.pageCount : 0,
                    previewLink: item.volumeInfo.previewLink ? item.volumeInfo.previewLink : 'Preview não disponível',
                    buyLink: item.saleInfo.buyLink ? item.saleInfo.buyLink : 'Indisponível no momento!',
                }));

            if (newBooks.length < 4) {
                setShowLoadMore(false);
            }

            setBooks([...books, ...newBooks]);
        } catch (error) {
            console.log('Não foi possível carregar os livros', error)
        }
    }

    useEffect(() => {
        loadBooks();
    }, []);

    const handleLoadMore = () => {
        loadBooks();
    }

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container_main}>
            <Header onSearch={handleSearch}></Header>
            <div className={styles.main}>
                {filteredBooks.map((book) => (
                    <CardBook
                        book={book}
                        key={book.id}
                    >
                    </CardBook>
                ))}
            </div>
            {showLoadMore && <button type='button' onClick={handleLoadMore} className={styles.btn_see_more}>Veja mais</button>}
        </div>
    )
}