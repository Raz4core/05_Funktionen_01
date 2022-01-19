"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
//test();

// Funktionsrumpf (body) / callee
// function test()
// {
//     console.log ("Hallo!");
// }


/** Funktionen 02a */

//Aufruf (call)
ausgabeNamen();

// Function
function ausgabeNamen() {
    let firstName = "Anna"; // what happens in Vegas.
    console.log ("Lappen!" + firstName);
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Aufruf (call)
ausgabeNamen();

// Funktion
function ausgabeNamen() {
    let firstName = "Anna"; // what happens in Vegas, ...
    console.log("Hallo " + firstName + "!");
}

// console.log(firstName);  // .. stays in Vegas!
