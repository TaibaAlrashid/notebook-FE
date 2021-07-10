import { GrChapterAdd } from 'react-icons/gr';
import { useState } from 'react';


const AddNote = () => {

    const [note, setnote] = useState('');

    const handleChange = (event) => {
        setnote(event.target.value);
    }

    const handleSave = () => {

    }

    return (
        <div className="note-item new">
            <textarea rows="8" cols="10" placeholder="Type to add a note..." value={note} onChange={handleChange} />
            <div className="note-footer">
                <small> 200 Remaining </small>
                <GrChapterAdd size="1.3em" onClick={handleSave} />
            </div>
        </div>
    )
}

export default AddNote;