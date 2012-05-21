/*
counter.js

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

var textbox = window.document.getElementById("textbox");
var counter = window.document.getElementById("counter");
var limit = 140;

function setCounterNode(text) {
    var textNode = {};
    var container = counter;
    var i = 0;
    textNode = window.document.createTextNode(text);
    i = container.childNodes.length;
    while (container.childNodes.length > 0) {
        container.removeChild(container.childNodes.item(--i));
    }
    container.appendChild(textNode);
}

var setCounter = function () {
    var valueLength = textbox.value.length;
    var remaining = 0;
    counter.style.color = "";
    if (!valueLength) {
        setCounterNode(limit);
    } else {
        remaining = limit - valueLength;
        setCounterNode(remaining);
        if (remaining < 0) {
            counter.style.color = "red";
        } 
    }
};

textbox.onkeydown = setCounter;
textbox.onkeypress = setCounter;
textbox.onkeyup = setCounter;

setCounterNode(limit);
