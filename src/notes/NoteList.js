import { useState } from "react";
import NoteItem from "./NoteItem";
import SearchBar from "./components/SearchBar";
import { observer } from "mobx-react";
import noteStore from "./stores/NoteStore";


const NoteList = () => {

    const [query, setQuery] = useState("");

    const notelist = noteStore.Notes.filter((note) => note.name.toLowerCase().includes(query.toLowerCase())).map((note) => (
        <NoteItem note={note} notename={note.name} key={note.id} />));

    return (
        <div>
            <SearchBar setQuery={setQuery} />
            <div className="notes-list">
                {notelist}
            </div>
        </div>
    )
}

export default observer(NoteList);










// import { useState } from "react";
// import Booksitem from "./BookItem";
// import SearchBar from "./SearchBar";
// import bookStore from "./stores/BookStore";
// import { observer } from "mobx-react";
// import { BiBookAddStyled } from "./styles";
// import BookModal from "./modals/BookModal";

// const BookList = () => {
//     const [query, setQuery] = useState("");
//     const [isOpen, setIsOpen] = useState(false);

//     const openModal = () => setIsOpen(true);
//     const closeModal = () => setIsOpen(false);

//     // lowercase
//     const booklist = bookStore.Books.filter((book) => book.name.toLowerCase().includes(query.toLowerCase())).map((book) => (
//         <Booksitem book={book} bookname={book.name} key={book.id} />
//     ));


//     return (
//         <div>
//             <SearchBar setQuery={setQuery} />
//             <BiBookAddStyled size="2em" onClick={openModal} />
//             <BookModal closeModal={closeModal} isOpen={isOpen} />
//             <div className="list">{booklist}</div>
//         </div>

//     );
// };

// export default observer(BookList);