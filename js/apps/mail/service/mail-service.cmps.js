import { storageService } from '../../../main-services/async-storage.services.js'
import { utilService } from '../../../main-services/util.services.js';

const EMAILS_KEY = 'emailsDB'
_createEmails()

export const mailService = {
    query,
    get,
    remove,
    put,
    post,
}

function query() {
    return storageService.query(EMAILS_KEY)
}

function get(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}

function put(id) {
    return storageService.put(EMAILS_KEY, id);
}

function post(email) {
    return storageService.post(EMAILS_KEY, email);
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails = [{
                id: storageService.makeId(),
                subject: 'Tea Please?',
                body: 'Would you like a cup of Tea??',
                isRead: false,
                sentAt: Date.now(),
                sender: 'TheMadHatter@Disney.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'Memory',
                body: 'The mother of the tribe navigate to a place she never been',
                isRead: false,
                sentAt: Date.now(),
                sender: 'elephant@nationalG.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'gym contract',
                body: 'Dear Appsus, please find attached signed gym contract. hope you see you soon',
                isRead: false,
                sentAt: Date.now(),
                sender: 'momo@momo.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'No pain, no gain',
                body: '',
                isRead: false,
                sentAt: Date.now(),
                sender: 'user@appsus.com',
                receiver: 'momo@momo.com',
                type: 'sent',
            },
            {
                id: storageService.makeId(),
                subject: 'gym contract',
                body: 'Dear Appsus, please find attached signed gym contract. hope you see you soon',
                isRead: false,
                sentAt: Date.now(),
                sender: 'momo@momo.com',
                receiver: 'user@appsus.com',
                type: 'sent',
            },
            {
                id: storageService.makeId(),
                subject: 'Proud teamleader',
                body: 'Dear Team, it was a huge pleasure for me to be the team leader of this app',
                isRead: false,
                sentAt: Date.now(),
                sender: 'OmriBaram@coding-academy.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'Appsus is the best!',
                body: 'OMG Neomi and Yoni, its the best app i ever seen in my life!',
                isRead: false,
                sentAt: Date.now(),
                sender: 'RotemBublil@coding-academy.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'weather dev ASAP',
                body: 'Guys its freezing upthere in north, i need weather app ASAP!',
                isRead: false,
                sentAt: Date.now(),
                sender: 'ShaniAharon@coding-academy.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'Homeeeee',
                body: 'I am coming home!',
                isRead: false,
                sentAt: Date.now(),
                sender: 'E.T@universal-studio.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'The North remember',
                body: 'The north still remember the red wedding',
                isRead: false,
                sentAt: Date.now(),
                sender: 'Sansa-Stark@houseofstark.com',
                receiver: 'user@appsus.com',
                type: 'sent',
            },
            {
                id: storageService.makeId(),
                subject: 'cross the Rubicon',
                body: 'if you desire to cross the Rubicon, dont look back',
                isRead: false,
                sentAt: Date.now(),
                sender: 'Julius-Cesar@Roman-Empire.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'I am a lion',
                body: 'Lions recover faster than humans',
                isRead: false,
                sentAt: Date.now(),
                sender: 'Zlatan-Ibrahimovic@ACMilano.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'thats life',
                body: 'Thats life and I cant deny it',
                isRead: false,
                sentAt: Date.now(),
                sender: 'Frank-sinatra@LasVegas.com',
                receiver: 'user@appsus.com',
                type: 'sent',
            },

        ]
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}