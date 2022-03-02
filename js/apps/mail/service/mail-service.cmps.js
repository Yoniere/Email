import { storageService } from '../../../main-services/async-storage.services.js'
import { utilService } from '../../../main-services/util.services.js';

const EMAILS_KEY = 'emailsDB'
_createEmails()

export const mailService = {
    query,
    get,
    remove,
    put,
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
            },
            {
                id: storageService.makeId(),
                subject: 'job interview',
                body: 'dear sir, we would like to have a short phone call regard your job application',
                isRead: false,
                sentAt: Date.now() + 20000,
                sender: 'momo@momo.com',
            },
            {
                id: storageService.makeId(),
                subject: 'gym contract',
                body: 'Dear Appsus, please find attached signed gym contract. hope you see you soon',
                isRead: false,
                sentAt: Date.now() + 40000,
                sender: 'momo@momo.com',
            }
        ]
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}