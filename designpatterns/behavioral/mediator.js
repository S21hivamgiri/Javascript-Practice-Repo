const createMediator = () => {
  const peers = [];
  return {
    add: (peer) => peers.push(peer),
    broadcast: (message, sender) => {
      peers.forEach((peer) => {
        if (peer !== sender) peer.receive(message);
      });
    },
  };
};

const createPeer = (name, mediator) => {
  const peer = {
    name,
    send: (msg) => mediator.broadcast(`${name}: ${msg}`, peer),
    receive: (msg) => console.log(`${name} received: ${msg}`),
  };
  mediator.add(peer);
  return peer;
};

// Usage:
const chatRoom = createMediator();
const alice = createPeer("Alice", chatRoom);
const bob = createPeer("Bob", chatRoom);
const charlie = createPeer("Charlie", chatRoom);

alice.send("Hello everyone!");
// Logs:
// Bob received: Alice: Hello everyone!
// Charlie received: Alice: Hello everyone!
