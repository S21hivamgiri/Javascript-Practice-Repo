class BeverageMaker {
  prepare() {
    this.boilWater();
    this.brew(); // Deferred step
    this.pour();
  }
  boilWater() {
    console.log("Boiling water...");
  }
  pour() {
    console.log("Pouring into cup.");
  }
  brew() {
    throw new Error("Subclass must implement brew()");
  }
}

class Tea extends BeverageMaker {
  brew() {
    console.log("Steeping the tea leaves.");
  }
}

// Usage:
const tea = new Tea();
tea.prepare();
// Logs:
// Boiling water...
// Steeping the tea leaves.
// Pouring into cup.
