// Latihan 4 Hierarki Class Hewan
class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }

  // Method bersuara()
  bersuara() {
    console.log(`${this.nama} berkata: ${this.suara}`);
  }

  // Method info()
  info() {
    console.log(`Nama hewan: ${this.nama}`);
  }
}

// 3. Child class Anjing
class Anjing extends Hewan {
  // Method tambahan fetch()
  fetch() {
    console.log(`${this.nama} mengambil bola!`);
  }

  // Override method info()
  info() {
    console.log(`Nama hewan: ${this.nama} (jenis: anjing)`);
  }
}

// 4. Child class Kucing
class Kucing extends Hewan {
  // Method tambahan cakarSofa()
  cakarSofa() {
    console.log(`${this.nama} mencakar sofa!`);
  }

  // Override method bersuara()
  bersuara() {
    super.bersuara();
    console.log("Purrr...");
  }
}

// 5. Membuat instance Anjing dan Kucing
const anjing1 = new Anjing("Buddy", "Guk guk");
const anjing2 = new Anjing("Rocky", "Woof");

const kucing1 = new Kucing("Mimi", "Meong");
const kucing2 = new Kucing("Luna", "Miaw");

// 6. Masukkan ke array (Polymorphism)
const daftarHewan = [anjing1, anjing2, kucing1, kucing2];

// Gunakan forEach untuk memanggil method
console.log("=== Demonstrasi Polymorphism ===");

daftarHewan.forEach(function (hewan) {
  hewan.bersuara();
  hewan.info();
});

// Uji method tambahan
console.log("=== Method Tambahan ===");

anjing1.fetch();
anjing2.fetch();

kucing1.cakarSofa();
kucing2.cakarSofa();