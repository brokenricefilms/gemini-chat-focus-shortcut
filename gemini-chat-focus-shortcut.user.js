// ==UserScript==
// @name         Gemini Chat Focus shortcut
// @namespace    https://github.com/brokenricefilms/gemini-chat-focus-shortcut
// @version      1.0
// @description  Focuses the chat input field when 'Escape' is pressed.
// @author       brokenricefilms
// @match        https://gemini.google.com/app/*
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        // Replace '.ql-editor' with the actual selector for your chat box
        // (.ql-editor work for me, but idk it work for you)
        const chatBox = document.querySelector('.ql-editor');
        if (chatBox) {
            chatBox.focus();
        }
    }
});
