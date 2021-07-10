import { observer } from 'mobx-react';
import { MdDeleteForever } from 'react-icons/md';
const NoteItem = (props) => {


    return (
        <div className="note-item">
            <h2>
                {props.notename}
            </h2>
            <p>
                {props.note.text}
            </p>
            <div className="note-footer">
                <small> {props.note.date} </small>
                <MdDeleteForever size="1.3em" />
            </div>
        </div>
    )
}

export default observer(NoteItem);



// import { BookWrapper, NameInItem } from './styles';
// import DeleteButton from "./buttons/DeleteButtons";
// import { Link } from 'react-router-dom';
// import UpdateButton from "./buttons/UpdateButton";
// import { observer } from 'mobx-react';

// const BookItem = (props) => {

//     return (
//         <BookWrapper>
//             <div className="style-bg">
//                 <Link to={`/Books/${props.book.name}`}>
//                     <img className="book" alt={props.book.name} src={props.book.image} />
//                 </Link>
//                 <NameInItem>{props.book.name}</NameInItem>
//                 <div>
//                     <UpdateButton book={props.book} />
//                     <DeleteButton bookId={props.book.id} />
//                 </div>
//             </div>

//         </BookWrapper>

//     );

// };

// export default observer(BookItem);