// ==UserScript==
// @name         Gemini Chat Focus shortcut
// @namespace    Violentmonkey Scripts
// @version      1.0
// @description  Focuses the chat input field when 'Escape' is pressed.
// @author       brokenricefilms
// @match        https://gemini.google.com/app/*
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        // Replace 'chat_box_selector' with the actual selector for your chat box
        const chatBox = document.querySelector('.ql-editor');
        if (chatBox) {
            chatBox.focus();
        }
    }
});
