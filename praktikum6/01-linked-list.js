// 01-linked-list.js
// ============================================
// SINGLY LINKED LIST — Implementasi Lengkap
// ============================================

// =======================
// Class Node
// =======================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// =======================
// Class LinkedList
// =======================
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Tambah data di akhir
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  // Tambah data di awal
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  // Insert data di index tertentu
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Index di luar batas!");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

    this.size++;
  }

  // Ambil data berdasarkan index
  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }

      current = current.next;
      count++;
    }

    return null;
  }

  // Cari index berdasarkan data
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // Hapus berdasarkan data
  delete(data) {
    if (!this.head) {
      return false;
    }

    // Jika head yang dihapus
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // Hapus berdasarkan index
  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    // Hapus head
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next;

    this.size--;
  }

  // Cek apakah kosong
  isEmpty() {
    return this.size === 0;
  }

  // Balik linked list
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;

      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Hapus semua data
  clear() {
    this.head = null;
    this.size = 0;
  }

  // Convert ke array
  toArray() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  // Tampilkan linked list
  print() {
    if (!this.head) {
      console.log("Linked List kosong");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += `[${current.data}] -> `;
      current = current.next;
    }

    result += "null";

    console.log(result);
    console.log("Size:", this.size);
  }
}

// ============================================
// DEMO PROGRAM
// ============================================

const list = new LinkedList();

console.log("=== Append ===");
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();

console.log("\n=== Prepend ===");
list.prepend(5);
list.print();

console.log("\n=== InsertAt(15, 2) ===");
list.insertAt(15, 2);
list.print();

console.log("\n=== GetAt(3) ===");
console.log(list.getAt(3));

console.log("\n=== IndexOf(30) ===");
console.log(list.indexOf(30));

console.log("\n=== Delete(20) ===");
list.delete(20);
list.print();

console.log("\n=== DeleteAt(1) ===");
list.deleteAt(1);
list.print();

console.log("\n=== Reverse ===");
list.reverse();
list.print();

console.log("\n=== To Array ===");
console.log(list.toArray());

console.log("\n=== Is Empty ===");
console.log(list.isEmpty());

console.log("\n=== Clear ===");
list.clear();
list.print();

console.log("\n=== Is Empty ===");
console.log(list.isEmpty());
