// 1. The target Product class
class User {
  constructor(builder) {
    this.lakh = builder.lakh;
    this.thousand = builder.thousand;
  }

  value(){
    return this.lakh * 100000 + this.thousand * 1000;
  }

  print() {
    return `${this.thousand} thousand ${this.lakh} lakhs`;
  }
}

class UserBuilder {
  setThousand(c) {
    this.thousand = c;
    return this;
  }
  setLakh(c) {
    this.lakh = c;
    return this;
  }

  build() {
    return new User(this);
  }
}

// Usage:
const user = new UserBuilder().setThousand(28).setLakh(34).build();

console.log(user.value());
