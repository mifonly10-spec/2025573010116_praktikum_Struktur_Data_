// Class Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Class Stack menggunakan Linked List
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Menambahkan data ke stack
  push(data) {
    const node = new Node(data);
    node.next = this.top; // node baru menunjuk top lama
    this.top = node;      // top menjadi node baru
    this.size++;
  }

  // Menghapus data teratas
  pop() {
    if (this.isEmpty()) return null;

    const val = this.top.data;
    this.top = this.top.next;
    this.size--;

    return val;
  }

  // Melihat data teratas tanpa menghapus
  peek() {
    return this.isEmpty() ? null : this.top.data;
  }

  // Mengecek apakah stack kosong
  isEmpty() {
    return this.size === 0;
  }

  // Menampilkan isi stack
  print() {
    let current = this.top;
    let result = [];

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    console.log("Stack:", result.join(" -> "));
  }
}

// Contoh penggunaan
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Stack: 30 -> 20 -> 10

console.log("Peek:", stack.peek()); // 30
console.log("Pop:", stack.pop());   // 30

stack.print(); // Stack: 20 -> 10
console.log("Size:", stack.size); // 2