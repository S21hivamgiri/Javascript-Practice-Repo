class DarkTheme {
  getBackgroundColor() {
    return "#121212";
  }
  getTextColor() {
    return "#FFFFFF";
  }
}

class LightTheme {
  getBackgroundColor() {
    return "#FFFFFF";
  }
  getTextColor() {
    return "#000000";
  }
}

class View {
  constructor(theme) {
    this.theme = theme; // This reference is the "Bridge"
  }

  render() {
    throw new Error("Render method must be implemented");
  }
}

// Refined Abstractions
class SimpleView extends View {
  render(content) {
    return `
      <div style="background: ${this.theme.getBackgroundColor()}; color: ${this.theme.getTextColor()}">
        <p>${content}</p>
      </div>`;
  }
}

class ResourceView extends View {
  render(resource) {
    return `
      <div style="background: ${this.theme.getBackgroundColor()}; color: ${this.theme.getTextColor()}">
        <h2>${resource.title}</h2>
        <p>${resource.description}</p>
        <a href="${resource.url}">Click Here</a>
      </div>`;
  }
}

const dark = new DarkTheme();
const light = new LightTheme();

// Mix and match views and themes dynamically at runtime
const simpleDarkView = new SimpleView(dark);
console.log(simpleDarkView.render("Hello World"));

const resourceLightView = new ResourceView(light);
const article = {
  title: "JS Patterns",
  description: "Learning Bridge",
  url: "https://example.com",
};
console.log(resourceLightView.render(article));
