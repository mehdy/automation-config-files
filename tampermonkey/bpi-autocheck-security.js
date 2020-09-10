// ==UserScript==
// @name         Autocheck security
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass that fucking stupid security check
// @author       Mehdy Khoshnoody
// @match        https://ib.bpi.ir/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let checkbox = document.getElementById('StatemAgreementent');
    if (checkbox) {
        document.getElementById('password').readOnly = false;
    }
})();
