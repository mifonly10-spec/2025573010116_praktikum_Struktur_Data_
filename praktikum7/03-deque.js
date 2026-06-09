// 03-deque.js
// ============================================
// DOUBLE-ENDED QUEUE (DEQUE)
// ============================================

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  // Tambah dari depan
  addFront(data) {
    const node = new Node(data);

    if (!this.front) {
      this.front = this.back = node;
    } else {
      node.next = this.front;
      this.front.prev = node;
      this.front = node;
    }

    this.size++;
  }

  // Tambah dari belakang
  addBack(data) {
    const node = new Node(data);

    if (!this.back) {
      this.front = this.back = node;
    } else {
      node.prev = this.back;
      this.back.next = node;
      this.back = node;
    }

    this.size++;
  }

  // Hapus dari depan
  removeFront() {
    if (!this.front) return null;

    const value = this.front.data;
    this.front = this.front.next;

    if (this.front) {
      this.front.prev = null;
    } else {
      this.back = null;
    }

    this.size--;
    return value;
  }

  // Hapus dari belakang
  removeBack() {
    if (!this.back) return null;

    const value = this.back.data;
    this.back = this.back.prev;

    if (this.back) {
      this.back.next = null;
    } else {
      this.front = null;
    }

    this.size--;
    return value;
  }

  peekFront() {
    return this.front ? this.front.data : null;
  }

  peekBack() {
    return this.back ? this.back.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let current = this.front;
    let result = "";

    while (current) {
      result += current.next
        ? `[${current.data}] ↔ `
        : `[${current.data}]`;

      current = current.next;
    }

    console.log(`FRONT → ${result} ← BACK`);
  }
}

// ============================================
// APLIKASI: Sliding Window Maximum
// ============================================
// Mengembalikan nilai maksimum pada setiap window berukuran k

function slidingWindowMax(arr, k) {
  if (k <= 0 || k > arr.length) {
    return [];
  }

  const deque = new Deque(); // menyimpan indeks
  const result = [];

  for (let i = 0; i < arr.length; i++) {

    // Hapus indeks yang sudah keluar dari window
    while (
      !deque.isEmpty() &&
      deque.peekFront() <= i - k
    ) {
      deque.removeFront();
    }

    // Hapus indeks dari belakang
    // jika nilainya lebih kecil dari elemen saat ini
    while (
      !deque.isEmpty() &&
      arr[deque.peekBack()] < arr[i]
    ) {
      deque.removeBack();
    }

    deque.addBack(i);

    // Simpan maksimum ketika window pertama terbentuk
    if (i >= k - 1) {
      result.push(arr[deque.peekFront()]);
    }
  }

  return result;
}

// ============================================
// DEMONSTRASI DEQUE
// ============================================

console.log("=== Demonstrasi Deque ===");

const dq = new Deque();

dq.addBack(1);
dq.addBack(2);
dq.addBack(3);
dq.addFront(0);

dq.print();

console.log("Remove back :", dq.removeBack());
console.log("Remove front:", dq.removeFront());

dq.print();

// ============================================
// DEMONSTRASI SLIDING WINDOW MAXIMUM
// ============================================

console.log("\n=== Sliding Window Maximum ===");

const arr = [1, 3, -1, -3, 5, 3, 6, 7];

console.log("Array :", arr);
console.log("k = 3 :", slidingWindowMax(arr, 3));