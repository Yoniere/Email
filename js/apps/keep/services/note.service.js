// import { utilService } from '../services/util-service.js';
import { storageService } from '../../../main-services/async-storage.services.js'

const NOTES_KEY = 'notes';

export const noteService = {
    getById,
    query,
    get,
    remove,
    save,
    removeNote,
}

function getById() {
    return Promise.resolve(notes);
}


function query() {
    return storageService.query(NOTES_KEY);
}


function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function removeNote(note, idx) {

    return storageService.put(NOTES_KEY, note)
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)

}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note);
    else return storageService.post(NOTES_KEY, note);
}

const notes = [{
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: {
        txt: "Fullstack Me Baby!"
    }
},
{
    id: "n102",
    type: "note-img",
    info: {
        url: "http://some-img/me",
        title: "Bobi and Me"
    },
    style: {
        backgroundColor: "#00d"
    }
},
{
    id: "n103",
    type: "note-todos",
    info: {
        label: "Get my stuff together",
        todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
        ]
    }
}
];