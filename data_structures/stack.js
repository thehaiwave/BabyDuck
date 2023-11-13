class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  top() {
    return this.items[this.items.length - 1];
  }

  print(way) {
    if (!way) {
      return this.items.map((item) => item);
    } else if (way === "type") {
      return this.items.map((item) => item.type);
    } else if (way === "name") {
      return this.items.map((item) => item.name);
    }
  }

  length() {
    return this.items.length;
  }
}

export default Stack;
