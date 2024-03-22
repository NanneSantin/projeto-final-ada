import { useState } from "react";
import Books from "../Interfaces/book";

function useBooksDetails() {

    const [currentBookDetail, setCurrentBookDetail] = useState<Books>(
        localStorage.getItem('current-book')
            ? JSON.parse(localStorage.getItem('current-book')!)
            : {
                id: '',
                title: '',
                author: '',
                image: '',
                price: 0,
                publisher: '',
                description: '',
                pageCount: 0,
                previewLink: '0',
                buyLink: '0'
            }
    );

    function handleInsertBook(book: Books) {
        localStorage.setItem('current-book', JSON.stringify(book));
        setCurrentBookDetail(book);
    }

    return {
        handleInsertBook,
        currentBookDetail
    }
}

export default useBooksDetails;