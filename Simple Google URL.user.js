// ==UserScript==
// @name         Simple Google URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect google search urls to a simpler one
// @author       elias123tre
// @match        https://www.google.com/search?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.toString().substring(0, 32) != "https://www.google.com/search?q=") {
        var squerypos = window.location.toString().indexOf("&q=") + 3;
        var url = window.location.toString();
        var newurl = url.substring(squerypos);
        var searchquery = newurl;

        if (newurl.includes("&")) {
            searchquery = newurl.substring(0, newurl.indexOf("&"));
        }
        //         newurl.substring(2, newurl.indexOf("&") + 2);
        window.location.href = "https://www.google.com/search?q=" + searchquery;
}
 })();
