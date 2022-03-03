import { storageService } from '../../../main-services/async-storage.services.js'
import { utilService } from '../../../main-services/util.services.js';

const NOTES_KEY = 'notesDB';
_createNotes()

export const noteService = {
    // getByType,
    query,
    get,
    remove,
    save,
    removeNote,
    getEmptyNote,
    put,
    addNote
}

function getEmptyNote(type = '') {

    return {
        id: utilService.makeId(),
        type,
        info: []
    };
}

function addNote(noteId, note) {
    return get(noteId).then(note => {
        note.id = utilService.makeId();
        if (!Array.isArray(note.newNotes)) {
            note.newNotes = [];
            note.newNotes.push(note);
        } else note.newNotes.push(note);
        storageService.put(NOTE_KEY, note);
        console.log(note)
        return note
    })

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

function put(note) {

    return storageService.put(NOTES_KEY, note)

}
// function getByType() {
//     return storageService.get(NOTES_KEY, noteId)
// }

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note);
    else return storageService.post(NOTES_KEY, note);
}


function _createNotes() {

    let notes = utilService.loadFromStorage(NOTES_KEY);

    if (!notes || !notes.length) {
        notes = [

            {
                id: "n101",
                type: "note-txt",
                isPinned: false,
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
            },
            {
                id: "n104",
                type: "note-video",
                info: {
                    label: "Get my stuff together",
                    videos: [
                        { url: "https://www.youtube.com/watch?v=s4ObxcdXoFE", },
                        { url: "https://dai.ly/x7n7y06", }
                    ]
                }
            }
        ];
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}

// function getColor() {
//     let color = utilService.loadFromStorage(NOTES_KEY);

// }


