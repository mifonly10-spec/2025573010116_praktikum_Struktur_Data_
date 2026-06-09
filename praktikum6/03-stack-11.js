// 03-stack-1.js
// ============================================
// IMPLEMENTASI STACK DENGAN LINKED LIST
// ============================================

// ── Class Node ──────────────────────────────
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ── Class LinkedList ───────────────────────
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // tambah di depan (O(1))
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // hapus node depan (O(1))
  removeHead() {
    if (!this.head) return null;

    const removed = this.head;
    this.head = this.head.next;

    this.length--;

    return removed.data;
  }

  // ambil data paling depan
  getHead() {
    return this.head ? this.head.data : null;
  }

  // cek kosong
  isEmpty() {
    return this.length === 0;
  }

  // ukuran linked list
  size() {
    return this.length;
  }

  // tampilkan isi linked list
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";
    console.log(result);
  }
}

// ── Class Stack ────────────────────────────
// menggunakan LinkedList (komposisi)
class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  // push = tambah ke atas stack
  push(data) {
    this.list.prepend(data);
  }

  // pop = hapus data teratas
  pop() {
    return this.list.removeHead();
  }

  // lihat data teratas
  peek() {
    return this.list.getHead();
  }

  // cek stack kosong
  isEmpty() {
    return this.list.isEmpty();
  }

  // ukuran stack
  size() {
    return this.list.size();
  }

  // tampilkan stack
  print() {
    this.list.print();
  }
}

// ============================================
// DEMO STACK
// ============================================

const stack = new Stack();

console.log("=== PUSH DATA ===");
stack.push("A");
stack.push("B");
stack.push("C");

stack.print();

console.log("\nTop Stack:", stack.peek());
console.log("Size:", stack.size());

console.log("\n=== POP DATA ===");
console.log("Data keluar:", stack.pop());

stack.print();

console.log("\nTop Stack:", stack.peek());
console.log("Size:", stack.size());

// ============================================
// SIMULASI UNDO / REDO SEDERHANA
// ============================================

console.log("\n=== SIMULASI UNDO ===");

const undoStack = new Stack();

const actions = [
  "Menulis Hello",
  "Menambah World",
  "Menghapus Huruf",
  "Mengganti Warna",
];

console.log("\nMenyimpan aksi:");
for (let action of actions) {
  console.log("Push:", action);
  undoStack.push(action);
}

console.log("\nIsi Stack:");
undoStack.print();

console.log("\nUndo 2 kali:");
console.log("Undo:", undoStack.pop());
console.log("Undo:", undoStack.pop());

console.log("\nSisa Stack:");
undoStack.print();
