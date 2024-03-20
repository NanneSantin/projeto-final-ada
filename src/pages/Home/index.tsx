import { useEffect, useState } from "react";
import Header from "../../components/Header"
import CardBook from "../../components/CardsBook";
import Book from "../../Interfaces/book";
import { booksApi } from "../../network/api";

export default function Home() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [books, setBooks] = useState<Book[]>([]);

    const loadBooks = async () => {
        try {
            const response = await booksApi.get('/', {
                params: {
                    q: 'inauthor:random',
                    startIndex: 0,
                    maxResults: 30
                }
            });

            const formattedBooks = response.data.items.map((item: any) => ({
                id: item.id,
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Autor não disponível',
                image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : '',
                price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 'Preço não disponível'
            }));

            setBooks(formattedBooks);
        } catch (error) {
            console.log('Não foi possível carregar os livros', error)
        }
    }

    useEffect(() => {
        loadBooks();
    }, []);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header onSearch={handleSearch}></Header>
            <div className='main'>
                {filteredBooks.map((book) => (
                    <CardBook
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        image={book.image}
                        price={book.price}
                        key={book.id}
                    >
                    </CardBook>
                ))}
            </div>
        </div>
    )
}