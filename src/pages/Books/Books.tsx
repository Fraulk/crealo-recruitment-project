import { AppDispatch, RootState } from "../../stores/store"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import "./style.scss"
import { fetchBooks } from "../../stores/bookStore";

const Books = () => {
    const { books } = useSelector((state: RootState) => state.books)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
      dispatch(fetchBooks())
    }, [])
    
    return (
        <div className="Books">
            <h2>List of books</h2>

            {/* Book's details:
                ...
            <hr /> */}

            <div className="booklist">
                <div className="booklist-element">
                    <div className="booklist-title">Title: Book's title</div>
                    <div className="booklist-body">Body: Book's body</div>
                </div>
            </div>
        </div>
    )
}

const BookDetails = (props: {book: {id: number, title: string, body: string}}) => {
    const {title, body} = props.book

    return (
        <div className="booklist" style={{cursor: "none"}}>
            <div className="booklist-element">
                <div className="booklist-title">Title: {title}</div>
                <div className="booklist-body">Body: {body}</div>
            </div>
        </div>
    )
}

export default Books