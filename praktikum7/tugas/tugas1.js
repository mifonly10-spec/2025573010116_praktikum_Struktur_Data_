// tugas-1.js
// ============================================
// Sistem Antrian Rumah Sakit
// Menggunakan 2 Queue:
// 1. antrianDarurat
// 2. antrianBiasa
// ============================================
// Class Pasien
// ============================================
class Pasien {
  constructor(id, nama, prioritas, waktuDaftar) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // 'darurat' atau 'biasa'
    this.waktuDaftar = waktuDaftar;
  }
}

// ============================================
// Class Queue
// ============================================
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.map((item) => item.nama);
  }
}

// ============================================
// Class AntrianRS
// ============================================
class AntrianRS {
  constructor() {
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  // Daftarkan pasien ke antrian sesuai prioritas
  // Big O: O(1)
  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.enqueue(pasien);
    } else {
      this.antrianBiasa.enqueue(pasien);
    }

    console.log(`${pasien.nama} berhasil didaftarkan (${pasien.prioritas})`);
  }

  // Layani pasien
  // Prioritas darurat selalu lebih dulu
  // Big O: O(n) karena shift()
  layani() {
    let pasien;

    if (!this.antrianDarurat.isEmpty()) {
      pasien = this.antrianDarurat.dequeue();
    } else if (!this.antrianBiasa.isEmpty()) {
      pasien = this.antrianBiasa.dequeue();
    } else {
      console.log("Tidak ada pasien dalam antrian.");
      return;
    }

    console.log(
      `Melayani -> ID: ${pasien.id}, Nama: ${pasien.nama}, Prioritas: ${pasien.prioritas}`,
    );
  }

  // Tampilkan status antrian
  // Big O: O(n)
  tampilkanAntrian() {
    console.log("\n=== STATUS ANTRIAN ===");

    console.log(
      "Darurat :",
      this.antrianDarurat.print().length > 0
        ? this.antrianDarurat.print().join(", ")
        : "Kosong",
    );

    console.log(
      "Biasa   :",
      this.antrianBiasa.print().length > 0
        ? this.antrianBiasa.print().join(", ")
        : "Kosong",
    );

    console.log("======================\n");
  }
}

// ============================================
// Simulasi
// ============================================

const rs = new AntrianRS();

const namaPasien = [
  "Andi",
  "Budi",
  "Citra",
  "Dewi",
  "Eko",
  "Farah",
  "Gilang",
  "Hani",
  "Indra",
  "Joko",
];

// Daftarkan 10 pasien secara acak
for (let i = 0; i < 10; i++) {
  const prioritas = Math.random() < 0.4 ? "darurat" : "biasa";

  const pasien = new Pasien(
    i + 1,
    namaPasien[i],
    prioritas,
    new Date().toLocaleTimeString(),
  );

  rs.daftar(pasien);
}

// Tampilkan antrian awal
rs.tampilkanAntrian();

// Layani semua pasien
console.log("=== PROSES PELAYANAN ===");

while (!rs.antrianDarurat.isEmpty() || !rs.antrianBiasa.isEmpty()) {
  rs.layani();
}

console.log("\nSemua pasien telah dilayani.");