import { GrChapterAdd } from 'react-icons/gr';
import { useState } from 'react';
import { observer } from "mobx-react";
import noteStore from "../stores/NoteStore";

const AddNote = () => {

    const [note, setnote] = useState({
        title: "",
        text: "",
        date: "",
    });

    const handleChange = (event) => {
        setnote({ ...note, [event.target.name]: event.target.value });
    }

    const handleSave = (event) => {
        event.preventDefault();
        noteStore.createnote(note);

    }

    return (
        <div className="note-item new">
            <textarea rows="1" cols="10" placeholder="Type to add a title..." onChange={handleChange} name="title" />
            <textarea rows="8" cols="10" placeholder="Type to add a note..." onChange={handleChange} name="text" />
            <div className="note-footer">
                <small> 200 Remaining </small>
                <GrChapterAdd size="1.3em" onClick={handleSave} />
            </div>
        </div>
    )
}

export default observer(AddNote);