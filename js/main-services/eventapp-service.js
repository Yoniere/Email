function on(eventName, listener) {
    const callListener = ({ detail }) => {
        listener(detail);
    };
    window.addEventListener(eventName, callListener);
    return () => {
        window.removeEventListener(eventName, callListener);
    };
}

function emit(eventName, data) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
}

export const eventApp = { on, emit };


export function showErrorMsg(txt) {
    eventApp.emit('show-msg', { txt, type: 'error' });
}
export function showSuccessMsg(txt) {
    eventApp.emit('show-msg', { txt, type: 'success' });
}






