(function (window, document, undefined) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function setupHandlers() {
        const inputElms = document.querySelectorAll('input');

        for (const inputElm of inputElms) {
            inputElm.addEventListener('keydown', (event) => {
                console.log(event);
            });
        }
    });
})(window, document);