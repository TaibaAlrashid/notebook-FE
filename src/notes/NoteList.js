import { useState } from "react";
import NoteItem from "./NoteItem";
import SearchBar from "./components/SearchBar";
import { observer } from "mobx-react";
import noteStore from "./stores/NoteStore";
import AddNote from "./components/AddNote";

const NoteList = () => {

    const [query, setQuery] = useState("");

    const notelist = noteStore.Notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())).map((note) => (
        <NoteItem note={note} notename={note.title} key={note.id} />));

    return (
        <div>
            <SearchBar setQuery={setQuery} />
            <div className="notes-list">
                {notelist}
                <AddNote />
            </div>
        </div>
    )
}

export default observer(NoteList);