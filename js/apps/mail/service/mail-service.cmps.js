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
                subject: 'miss you',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: Date.now(),
                sender: 'momo@momo.com',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'job interview',
                body: 'dear sir, we would like to have a short phone call regard your job application',
                isRead: false,
                sentAt: Date.now(),
                sender: 'momo@momo.com',
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
                subject: 'gym contract',
                body: 'Dear Appsus, please find attached signed gym contract. hope you see you soon',
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
                sender: 'OmriBaram@coding-academy',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'Appsus is the best!',
                body: 'OMG Neomi and Yoni, its the best app i ever seen in my life!',
                isRead: false,
                sentAt: Date.now(),
                sender: 'RotemBublil@coding-academy',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'weather dev ASAP',
                body: 'Guys its freezing upthere in north, i need weather app ASAP! ',
                isRead: false,
                sentAt: Date.now(),
                sender: 'ShaniAharon@coding-academy',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },
            {
                id: storageService.makeId(),
                subject: 'weather dev ASAP',
                body: 'Guys its freezing upthere in north, i need weather app ASAP! ',
                isRead: false,
                sentAt: Date.now(),
                sender: 'SharonFrenkel@coding-academy',
                receiver: 'user@appsus.com',
                type: 'inbox',
            },

        ]
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}