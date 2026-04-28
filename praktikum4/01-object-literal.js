const mahasiswa = {
  nama: "miftahuddin",
  umur: 20,
  jurusan: "Teknik Informatika",
  ipk: 4,
  aktif: true,
};

console.log("=== Akses Property ===");
console.log("Nama :", mahasiswa.nama);
console.log("Jurusan :", mahasiswa["jurusan"]);
const keyYangDicari = "ipk";
console.log("IPK :", mahasiswa[keyYangDicari]);
mahasiswa.email = "budi@email.com";
mahasiswa.umur = 21;
console.log("\nSetelah diubah:", mahasiswa);

delete mahasiswa.aktif;
console.log("Setelah delete:", mahasiswa);

const dosen = {
  nama: "Dr.miftahuddin ",
  mataKuliah: "Struktur Data",
  pengalaman: 10, // tahun
  
  perkenalan() {
    
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
  },
  statusSenior() {
    if (this.pengalaman >= 10) {
      return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
  },
};
console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log("\n=== Iterasi Object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    // skip method
    console.log(` ${key}: ${dosen[key]}`);
  }
}

console.log("Keys :", Object.keys(mahasiswa));
console.log("Values:", Object.values(mahasiswa));

// Latihan 1 Object Buku dan perpustakaan 
const buku = {
  judul: "Pemrograman JavaScript",
  pengarang: "Andi Setiawan",
  tahunTerbit: 2022,
  harga: 100000,
  tersedia: true,

  // Method info()
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
  },

  // Method diskon(persen)
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  },
};

// Menampilkan info buku
console.log(buku.info());

// Menghitung harga setelah diskon
console.log("Harga setelah diskon 10%: Rp" + buku.diskon(10));

// Membuat array koleksiBuku (minimal 3 buku)
const koleksiBuku = [
  {
    judul: "Belajar HTML",
    pengarang: "Budi Santoso",
    tahunTerbit: 2020,
    harga: 75000,
    tersedia: true,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },

  {
    judul: "Belajar CSS",
    pengarang: "Siti Aminah",
    tahunTerbit: 2021,
    harga: 85000,
    tersedia: false,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },

  {
    judul: "Belajar JavaScript",
    pengarang: "Rudi Hartono",
    tahunTerbit: 2023,
    harga: 95000,
    tersedia: true,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
];

// Menampilkan info semua buku menggunakan forEach
console.log("=== Semua Buku ===");
koleksiBuku.forEach(function (buku) {
  console.log(buku.info());
});

// Menggunakan filter untuk mendapatkan buku yang tersedia
const bukuTersedia = koleksiBuku.filter(function (buku) {
  return buku.tersedia === true;
});

console.log("=== Buku yang Tersedia ===");
bukuTersedia.forEach(function (buku) {
  console.log(buku.info());
});
