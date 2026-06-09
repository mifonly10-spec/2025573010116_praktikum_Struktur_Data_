// tugas-2.js
// ============================================
// MinStack
// Stack dengan operasi getMin() dalam O(1)
// Menggunakan dua stack:
// 1. stackData -> menyimpan data biasa
// 2. stackMin  -> menyimpan nilai minimum saat ini
// ============================================

class MinStack {
  constructor() {
    this.stackData = [];
    this.stackMin = [];
  }

  // Push elemen ke stack
  // Big O: O(1)
  push(value) {
    this.stackData.push(value);

    if (
      this.stackMin.length === 0 ||
      value <= this.stackMin[this.stackMin.length - 1]
    ) {
      this.stackMin.push(value);
    }
  }

  // Pop elemen dari stack
  // Big O: O(1)
  pop() {
    if (this.stackData.length === 0) {
      return null;
    }

    const removed = this.stackData.pop();

    if (removed === this.stackMin[this.stackMin.length - 1]) {
      this.stackMin.pop();
    }

    return removed;
  }

  // Melihat elemen paling atas
  // Big O: O(1)
  peek() {
    if (this.stackData.length === 0) {
      return null;
    }

    return this.stackData[this.stackData.length - 1];
  }

  // Mengembalikan nilai minimum saat ini
  // Big O: O(1)
  getMin() {
    if (this.stackMin.length === 0) {
      return null;
    }

    return this.stackMin[this.stackMin.length - 1];
  }

  // Mengecek apakah stack kosong
  // Big O: O(1)
  isEmpty() {
    return this.stackData.length === 0;
  }

  // Menampilkan isi stack
  // Big O: O(n)
  print() {
    console.log(this.stackData.join(" -> "));
  }
}

// ============================================
// Pengujian
// ============================================

const stack = new MinStack();

stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);

console.log("getMin() =", stack.getMin()); // 2

stack.pop(); // hapus 2
console.log("getMin() =", stack.getMin()); // 3

stack.pop(); // hapus 7
console.log("getMin() =", stack.getMin()); // 3