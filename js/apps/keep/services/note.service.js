import { storageService } from '../../../main-services/async-storage.services.js'
import { utilService } from '../../../main-services/util.services.js';

const NOTES_KEY = 'notesDB';
const STORAGE_KEY = 'userCache'

var gNotes;
// var gUserCache = utilService.loadFromStorage(STORAGE_KEY) || {}




_createNotes()

export const noteService = {
    // getByType,
    query,
    get,
    remove,
    save,
    removeNote,
    getNoteById,
    updateNote,
    put,
    post,
    getSongs,
    getNotes,
    initNotes
}

// function getEmptyNote(noteType) {
//     const emptyNote = {
//         isPinned: false,
//         info: {},
//         style: {
//             backgroundColor: null
//         }
//     }
// }

function initNotes() {
    const loaded = utilService.loadFromStorage(NOTES_KEY);
    if (!loaded || !loaded.length) {
        gNotes = notes;
        utilService.saveToStorage(NOTES_KEY, gNotes);
    } else gNotes = loaded;
}


function getSongs(val) {
    gUserSearch.push(val)
    saveToStorage(STORAGE_KEY, gUserSearch)

    if (gUserCache.length) {
        return Promise.resolve(gUserCache);
    }
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyB3dFH937QIEFt5dqdjbcfBPzTAc2D0jaY=${val}`)
        .then(res => {
            gUserCache = res.data.items
            saveToStorage(STORAGE_KEY, res.data.items)
            return res.data.items

        })
}


function getNoteById(id) {
    return storageService.get(NOTES_KEY, id);
}


function updateNote(note) {
    return storageService.put(NOTES_KEY, note)
}



function getNotes() {
    return JSON.parse(JSON.stringify(gNotes));
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
                    title: 'Note Title:',
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "http://coding-academy.org/books-photos/20.jpg",
                    title: "Bobi and Me"
                },
                style: {
                    title: 'your image',
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { id: 'ld3F323', txt: "Driving liscence", doneAt: null },
                        { id: '32323ew', txt: "Coding power", doneAt: 187111111 },

                    ],
                },
                style: {
                    title: 'todo list:',
                    backgroundColor: "#00d"
                }
            },
            // {
            //     id: "n104",
            //     type: "note-video",
            //     info: {
            //         label: "Get my stuff together",
            //         videos: [
            //             { url: "https://www.youtube.com/watch?v=s4ObxcdXoFE", },
            //             { url: "https://dai.ly/x7n7y06", }
            //         ]
            //     },
            //     style: {
            //         title: 'your video:',
            //         backgroundColor: "#ffffff"
            //     }



        ];
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}

// function getColor() {
//     let color = utilService.loadFromStorage(NOTES_KEY);

// }


