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
    addNote,
    post
}

function getEmptyNote(noteType) {
    const emptyNote = {
        isPinned: false,
        info: {},
        style: {
            backgroundColor: null
        }
    }

}

function addNote(note) {
    return storageService.post(NOTES_KEY, note)

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

function post(note) {
    return storageService.post(NOTES_KEY, note);
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
                    url: "http://coding-academy.org/books-photos/20.jpg",
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
                        { txt: "Coding power", doneAt: 187111111 },
                        { txt: " ", doneAt: null },
                        { txt: " ", doneAt: 187111111 },
                        { txt: " ", doneAt: null },
                        { txt: " ", doneAt: 187111111 },
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
            },
            {
                id: "n105",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "txt1!"
                }
            },
            {
                id: "n106",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "txt2!"
                }
            },
            {
                id: "n107",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "txt3!"
                }
            },
        ];
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}

// function getColor() {
//     let color = utilService.loadFromStorage(NOTES_KEY);

// }


