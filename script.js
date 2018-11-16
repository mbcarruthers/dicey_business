"use strict";

const container = document.querySelector(".container");
const die_array = [];

class Die {
    constructor() {
        this.value = 0;
        this.div = document.createElement("div");
        this.style_div();
        this.roll();
        container.appendChild(this.div);
    }

    roll() {
        this.value = Math.floor( Math.random() * 6 );
        this.div.innerHTML = "<h1> " + this.value + "</h1>";
    }
    style_div() {
        this.div.style.height = "100px";
        this.div.style.width = "100px";
        this.div.style.textAlign = "center";
        this.div.style.border = "1px solid black";
        this.div.style.margin = "1em";
    }
}

document.addEventListener("DOMContentLoaded" , function() {

    const generate = document.querySelector(".generate_die");
    const roll_die = document.querySelector(".roll_die");
    generate.addEventListener("click", () => {
        die_array.push(new Die());
    });

    roll_die.addEventListener("click", () => {
        die_array.forEach( ( die ) => {
            die.roll();
        })
    })
});