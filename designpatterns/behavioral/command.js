// Receiver: The object that does the actual work
const Light = {
  on: () => console.log("Light is ON"),
  off: () => console.log("Light is OFF"),
};

// Command: Encapsulates the action and its receiver
const TurnOnCommand = (receiver) => ({
  execute: () => receiver.on(),
  undo: () => receiver.off(),
});

// Invoker: Manages and triggers commands, tracking history
const RemoteControl = () => {
  const history = [];
  return {
    submit: (command) => {
      command.execute();
      history.push(command);
    },
    undo: () => history.pop()?.undo(),
  };
};

// Usage:
const remote = RemoteControl();
const lightOn = TurnOnCommand(Light);

remote.submit(lightOn); // Logs: Light is ON
remote.undo(); // Logs: Light is OFF
