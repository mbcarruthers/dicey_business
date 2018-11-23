"use strict";

const container = document.querySelector(".container");
const die_array = [];

class Die {
    constructor() {
        this.value = 0;
        this.div = document.createElement("div");
        this.div.classList.add("die");
        this.roll();
        container.appendChild(this.div);
    }

    roll() {
        this.value = Math.floor( Math.random() * 6 );
        this.div.innerHTML = "<h1> " + this.value + "</h1>";
        this.div.style.backgroundColor = `rgb(${Math.floor( Math.random() * 256) }, ${Math.floor( Math.random() * 256) } , ${Math.floor( Math.random() * 256) }`

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