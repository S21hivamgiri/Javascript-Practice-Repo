class User{
    constructor(name, age, choices= []){
        this.name = name;
        this.age = age;
        this.choices = choices;
    }

    clone(){
        return new User(this.name, this.age, [...this.choices]);
    }
}

const baseUser = new User("Mohan", 25, ["Cricket", "Football", "Hockey"]);

const baseUserclone = baseUser.clone();
baseUserclone.name = "Rana";
baseUserclone.age = 30;
baseUserclone.choices.push("Tennis");

console.log(baseUser);
console.log(baseUserclone);