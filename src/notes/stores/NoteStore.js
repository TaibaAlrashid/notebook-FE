import Notes from "../data/Notes";
import { makeAutoObservable } from 'mobx';
import slugify from "react-slugify";
import axios from 'axios';

class NoteStore {

    Notes = Notes;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    deletenote = async (NoteId) => {
        try {
            await axios.delete(`http://localhost:8000/notes/${NoteId}`);
            const updatedNotes = this.Notes.filter((note) => note.id !== NoteId);
            this.Notes = updatedNotes;
        } catch (error) {
            console.log(error);
        }

    }

    createnote = async (newNote) => {
        try {
            const response = await axios.post("http://localhost:8000/notes", newNote);
            this.Notes.push(response.data);

        } catch (error) {
            console.log(error);
        }

    }

    fetchNotes = async () => {
        try {
            const response = await axios.get("http://localhost:8000/notes");
            this.Notes = (response).data;
        } catch (error) {
            console.log(error);
        }
    }


}

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
