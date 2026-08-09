// method in object=> this= object
// using new create new instance as this= {}
// function=> this= global
// class => this= {} but static content will be hidden

const food = {
    title: 'a',
    getTitle() {
        console.log(this);
    }
}
food.video = function () {
    console.log(this);
}
food.video()// Return Object
food.getTitle();



// Return object a
function getTitle() {
    console.log(this);
}
getTitle(); // Return Window object



// Classes 
class Example {
    constructor() {}
    a=5;
    c=56;
    static d=6;// static content is hidden
    b=8+2;
    first() {
        console.log(this);
    }
}

let emp = new Example();
emp.first();




function Video() {
    console.log(this)
}
let video = new Video();// Return {}

Video.bind(this)// binding window obj
Video(); // return window obj
foodie = { food: 'Kimammoto' }
Video.call(foodie) // return foodie obj
Video.apply(foodie) // return foodie obj acta  scalll as no parameter.


video = {
    title: 'title',
    arr: [1, 2, 3, 4, 4],
    getTitle() {
        this.arr.forEach(function () {
            console.log("Indise object function", this)// Point to global this, 2 Solutions  below
        });
    }
}
video.getTitle();


//  Solution
video = {
    title: 'title',
    arr: [1, 2, 3, 4, 4],
    getTitle() {
        this.arr.forEach(() => {
            console.log(this)// Point to functional this
        });
    }
}
video.getTitle();


video = {
    title: 'title',
    arr: [1, 2, 3, 4, 4],
    getTitle() {
        this.arr.forEach(function () {
            console.log(this)// Point to functional this
        }, this);
    }
}
video.getTitle();



function abc() {
    function xyz() {
        this.man = "XYZ"
    }
    xyz();
}
abc()
console.log(man);// XYZ as this points to global objects


let abc = (() => {
    function xyz() {
        this.man = "XYZ";    // sets global.man
    }
    xyz();
    this.man = "ABC";        // sets module.exports.man
})()
console.log(this == module.exports); //true
console.log(module.exports.man); // ABC
console.log(global.man)//XYZ