class FileSystemItem {
  constructor(name) {
    this.name = name;
  }

  // Common operation
  getSize() {
    throw new Error("getSize() must be implemented");
  }
}

class File extends FileSystemItem {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  getSize() {
    return this.size;
  }
}

class Folder extends FileSystemItem {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(item) {
    this.children.push(item);
  }

  remove(item) {
    this.children = this.children.filter((child) => child !== item);
  }

  // Recursively calculates the size of everything inside the folder
  getSize() {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }
}

// --- Usage ---

// Create individual files (Leaves)
const file1 = new File("resume.pdf", 500);
const file2 = new File("photo.png", 2000);
const file3 = new File("notes.txt", 100);

// Create folders (Composites)
const rootFolder = new Folder("Root");
const mediaFolder = new Folder("Media");
const docsFolder = new Folder("Documents");

// Build the tree structure
docsFolder.add(file1);
docsFolder.add(file3);
mediaFolder.add(file2);

rootFolder.add(docsFolder);
rootFolder.add(mediaFolder);

// Client treats both Leaves and Composites uniformly
console.log(`"${file1.name}" size:`, file1.getSize(), "KB"); // 500 KB
console.log(
  `"${docsFolder.name}" folder total size:`,
  docsFolder.getSize(),
  "KB",
); // 600 KB
console.log(
  `"${rootFolder.name}" folder total size:`,
  rootFolder.getSize(),
  "KB",
); // 2600 KB
console.log(rootFolder);
