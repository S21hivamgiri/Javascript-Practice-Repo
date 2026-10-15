// Complex Subsystem 1
class CPU {
  freeze() {
    console.log("CPU frozen.");
  }
  jump(position) {
    console.log(`CPU jumped to position ${position}.`);
  }
  execute() {
    console.log("CPU executing commands...");
  }
}

// Complex Subsystem 2
class Memory {
  load(position, data) {
    console.log(`Loaded "${data}" into memory address ${position}.`);
  }
}

// Complex Subsystem 3
class HardDrive {
  read(lba, size) {
    return "BOOT_SECTOR_DATA";
  }
}

// The Facade
class ComputerFacade {
  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hd = new HardDrive();
  }

  // A single, simple method to hide all the internal complexity
  start() {
    this.processor.freeze();
    const bootData = this.hd.read(0x00, 1024);
    this.ram.load(0x00, bootData);
    this.processor.jump(0x00);
    this.processor.execute();
    console.log("System booted successfully!");
  }
}

// --- Client Code ---
const computer = new ComputerFacade();
// The user doesn't need to know how the CPU, RAM, or Hard Drive interact
computer.start();
