// 02-queue-ll.js
// ============================================
// QUEUE BERBASIS LINKED LIST
// ============================================

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // depan antrian
    this.tail = null; // belakang antrian
    this.size = 0;
  }

  // Tambah ke belakang
  enqueue(data) {
    const node = new Node(data);

    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  // Hapus dari depan
  dequeue() {
    if (this.isEmpty()) return null;

    const val = this.head.data;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.size--;
    return val;
  }

  front() {
    return this.head ? this.head.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let result = "FRONT → ";
    let current = this.head;

    while (current) {
      result += `[${current.data}] `;
      current = current.next;
    }

    console.log(result + "← BACK");
  }
}

// ============================================
// BFS (Breadth First Search) pada Grid
// ============================================

function bfsGrid(grid, startR, startC) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Validasi titik awal
  if (
    startR < 0 ||
    startR >= rows ||
    startC < 0 ||
    startC >= cols ||
    grid[startR][startC] === "#"
  ) {
    console.log("Posisi awal tidak valid!");
    return;
  }

  const visited = Array.from(
    { length: rows },
    () => Array(cols).fill(false)
  );

  const queue = new Queue();

  const arah = [
    [0, 1],   // kanan
    [0, -1],  // kiri
    [1, 0],   // bawah
    [-1, 0],  // atas
  ];

  queue.enqueue([startR, startC]);
  visited[startR][startC] = true;

  let level = 0;

  while (!queue.isEmpty()) {
    const levelSize = queue.size;
    let output = `Level ${level}: `;

    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue.dequeue();

      output += `(${r},${c}) `;

      for (const [dr, dc] of arah) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          !visited[nr][nc] &&
          grid[nr][nc] !== "#"
        ) {
          visited[nr][nc] = true;
          queue.enqueue([nr, nc]);
        }
      }
    }

    console.log(output);
    level++;
  }
}

// ============================================
// DEMONSTRASI QUEUE
// ============================================

console.log("=== Queue Demonstrasi ===");

const q = new Queue();

q.enqueue("Pelanggan-A");
q.enqueue("Pelanggan-B");
q.enqueue("Pelanggan-C");

q.print();

console.log("Dilayani:", q.dequeue());

q.enqueue("Pelanggan-D");

q.print();

// ============================================
// DEMONSTRASI BFS
// ============================================

console.log("\n=== BFS pada Grid (. = jalan, # = tembok) ===");

const grid = [
  [".", ".", ".", "#", "."],
  [".", "#", ".", "#", "."],
  [".", "#", ".", ".", "."],
  [".", ".", "#", ".", "."],
];

bfsGrid(grid, 0, 0);