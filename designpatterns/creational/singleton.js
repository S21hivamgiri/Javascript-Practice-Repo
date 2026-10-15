class SingletonClass {
  // Private static property to hold our unique instance
  static #instance = null;

  constructor() {
    if (SingletonClass.#instance) {
      return SingletonClass.#instance;
    }

    this.connectionString = "mongodb://localhost:27017/my_app";
    SingletonClass.#instance = this;
    Object.freeze(this);
  }
}

const db1 = new SingletonClass();
const db2 = new SingletonClass();

console.log(db1 === db2);
