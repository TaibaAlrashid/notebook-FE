import { observer } from 'mobx-react';
import { MdDeleteForever } from 'react-icons/md';
import noteStore from './stores/NoteStore';

const NoteItem = (props) => {

    const handleDelete = () => {
        noteStore.deletenote(props.note.id);
    };

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
                <MdDeleteForever size="1.3em" onClick={handleDelete} />
            </div>
        </div>
    )
}

export default observer(NoteItem);
