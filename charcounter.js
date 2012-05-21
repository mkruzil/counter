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

window.charCounter = {
    textBox : window.document.getElementById("textBox"),
    display : window.document.getElementById("display"),

    //Stores the maximum number of characters allowed in the text box
    charLimit : 140,

    //Gets the number of characters the user has remaining in the text box before the character limit is reached.
    getRemainingChars : function () {
        var charLength = window.charCounter.textBox.value.length;
        var charLimit = window.charCounter.charLimit;
        /*
            If the text box is empty, then there are no characters in the text box, which means the character limit should be displayed to the user.
            Otherwise, subtract the current length from the character limit and display that number to the user.
        */
        return !charLength ? charLimit : charLimit - charLength;
    },

    //Appends the current number of characters in the text box
    setDisplay : function () {
        var text = String(window.charCounter.getRemainingChars());
        var textNode = {};
        var container = window.charCounter.display;
        var i = 0;
        textNode = window.document.createTextNode(text);
        /* 
           The textNode should be appended to an empty container.
           So, we remove each node currently inside the container, starting with the last node in the NodeList and ending when 0 is reached.
           Note: Since childNodes is a live list(i.e, removal of items is instant), the length must be called repeatedly during the loop in order to get the current value.
        */
        i = container.childNodes.length;
        while (container.childNodes.length > 0) {
            container.removeChild(container.childNodes.item(--i));
        }
        container.appendChild(textNode);
    },

    setKeyEvents : function () {
        var textBox = this.textBox;
        var setDisplay = this.setDisplay;
        textBox.onkeydown = setDisplay;
        textBox.onkeypress = setDisplay;
        textBox.onkeyup = setDisplay;
    },

    init : function () {
        this.setKeyEvents();
        this.setDisplay();
    }

};

window.charCounter.init();
