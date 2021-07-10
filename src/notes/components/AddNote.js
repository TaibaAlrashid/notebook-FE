import { GrChapterAdd } from 'react-icons/gr';

const AddNote = () => {


    return (
        <div className="note-item new">
            <textarea rows="8" cols="10" placeholder="Type to add a note..." />
            <div className="note-footer">
                <small> 200 Remaining </small>
                <GrChapterAdd size="1.3em" />
            </div>
        </div>
    )
}

export default AddNote;