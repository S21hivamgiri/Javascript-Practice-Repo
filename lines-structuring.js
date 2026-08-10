let t = [
    { name: "React.js", price: 299 },
    { name: "Angular", price: 399 },
    { name: "Node.Js", price: 499 }
]

// console.log(" __________________________________");
// console.log("|"+"       Name    "+"    Price          |");
// console.log("|__________________________________|");
// console.log("|    " + t[0].name +"        " + t[0].price   +   "           |");
// console.log("|    " + t[1].name +"             " + t[1].price  +    "           |"); 
// console.log("|    " + t[2].name +"              " + t[2].price  +    "           |");
// console.log("|__________________________________|");

let u, p;
console.log("____________________________________");
console.log("|" + "       Name    " + "  |    Price       |");
console.log("|_________________|________________|");

for (i = 0; i < 3; i++) {
    c = t[i].name;
    for (m = 0; m < 20 - (c.length); ++m) {
        c = c + " ";
    }
    o = t[i].price;
    console.log("|   " + c + "|   " + o + "          |");

}
console.log("|_________________|________________|");

console.log("                      ");
console.log("                      ");
console.log("                      ");

var u, p;
console.log("_________________________________");
console.log("" + "       Name    " + "      Price       ");
console.log("_________________________________");

for (i = 0; i < 3; i++) {
    c = t[i].name;

    for (m = 0; m < 20 - (c.length); ++m) {
        c = c + " ";
    }
    o = t[i].price;
    console.log("   " + c + "   " + o + "          ");
}

console.log("_________________________________");
console.log("                      ");
console.log("                      ");
console.table(t);


/*   OUTPUT
_____________________________________________________________________________


PS C:\Users\shivam.giri\Documents\Javascript> node function.js
____________________________________
|       Name      |    Price       |
|_________________|________________|
|   React.js      |   299          |
|   Angular       |   399          |
|   Node.Js       |   499          |
|_________________|________________|



_________________________________
       Name          Price
_________________________________
   React.js         299
   Angular          399
   Node.Js          499
_________________________________


┌─────────┬────────────┬───────┐
│ (index) │    name    │ price │
├─────────┼────────────┼───────┤
│    0    │ 'React.js' │  299  │
│    1    │ 'Angular'  │  399  │
│    2    │ 'Node.Js'  │  499  │
└─────────┴────────────┴───────┘

*/