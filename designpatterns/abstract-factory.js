class WinButton {
  render() {
    return "Rendering a Windows-style Button";
  }
}

class WinCheckbox {
  render() {
    return "Rendering a Windows-style Checkbox";
  }
}

class MacButton {
  render() {
    return "Rendering a Mac-style Button";
  }
}

class MacCheckbox {
  render() {
    return "Rendering a Mac-style Checkbox";
  }
}

// Each factory encapsulates a group of individual product instantiations
class WinUIFactory {
  createButton() {
    return new WinButton();
  }
  createCheckbox() {
    return new WinCheckbox();
  }
}

class MacUIFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox() {
    return new MacCheckbox();
  }
}

class Application {
  constructor(uiFactory) {
    this.button = uiFactory.createButton();
    this.checkbox = uiFactory.createCheckbox();
  }

  paint() {
    console.log(this.button.render());
    console.log(this.checkbox.render());
  }
}

function run(currentOS) {
  // This could change dynamically based on environment configuration
  let factory;

  if (currentOS === "Windows") {
    factory = new WinUIFactory();
  } else if (currentOS === "Mac") {
    factory = new MacUIFactory();
  }

  // Inject the factory into the client application
  return new Application(factory);
}

console.log(run("Mac"));
// Application { button: MacButton {}, checkbox: MacCheckbox {} }
console.log(run("Windows").button.render());
// Rendering a Windows-style Button
