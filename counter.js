/*

Character Counter

A Twitter-style character counter

Copyright (c) 2012 Mike Kruzil

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.

*/

(function () {

    "use strict";

    //DOM Elements
    var TEXTBOX = window.document.getElementById("textbox");
    var DISPLAY = window.document.getElementById("display");

    //Stores the maximum number of characters allowed in the text box
    var LIMIT = 140;

    //Gets the number of characters the user has remaining in the text box before the character limit is reached.
    function getRemainingChars() {
        var length = TEXTBOX.value.length;
        /*
            If the text box is empty, then there are no characters in the text box, which means the character limit should be displayed to the user.
            Otherwise, subtract the current length from the character limit and display that number to the user.
        */
        return !length ? LIMIT : LIMIT - length;
    }

    //Appends the current number of characters in the text box
    function setDisplay() {
        var chars = getRemainingChars();
        var textNode = window.document.createTextNode(String(chars));
        var i = 0;
        /* 
           The text node should be appended to an empty container.
           So, we remove each node currently in the container node, starting with the last node in the NodeList and ending when 0 is reached.
           Note: Since childNodes is a live list(i.e, removal of items is instant), the length must be called repeatedly during the loop in order to get an up-to-date value.
        */
        i = DISPLAY.childNodes.length;
        while (DISPLAY.childNodes.length > 0) {
            DISPLAY.removeChild(DISPLAY.childNodes.item(--i));
        }
        DISPLAY.appendChild(textNode);
        //If the character limit has been exceeded, color the display red.
        DISPLAY.style.color = chars < 0 ? "red" : "";
    }

    function init() {
        //If there isn't already an onload function set, set one that clears any value currently in the text box (mainly for IE)
        if (window.onload === null) {
            window.onload = function () {
                TEXTBOX.value = "";
            };
        }
        //Set key events for the text box
        TEXTBOX.onkeydown = setDisplay;
        TEXTBOX.onkeypress = setDisplay;
        TEXTBOX.onkeyup = setDisplay;
        //Set the display to its initial value
        setDisplay();
    }

    init();

}());