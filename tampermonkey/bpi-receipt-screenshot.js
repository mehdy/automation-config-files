// ==UserScript==
// @name         Receipt Screenshot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Take a screenshot of the receipt
// @author       Mehdy Khoshnoody
// @match        https://ib.bpi.ir/Transfers/CardToCard.aspx
// @grant        none
// @require      https://html2canvas.hertzen.com/dist/html2canvas.min.js
// ==/UserScript==

(function() {
    'use strict';
    html2canvas(document.getElementById("TMContent")).then(canvas => {
        var link = document.createElement('a');
        link.download =`transaction-receipt-${new Date().toJSON().slice(0, 19)}.png`;
        link.href = canvas.toDataURL()
        link.click();
    });
})();
