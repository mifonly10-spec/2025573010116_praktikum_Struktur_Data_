function kuadratbiasa(x) {
  return x * x;
}
const kuadrat = (x) => {
  return x * x;
};
const kuadratringkas = (x) => x * x;

console.log("=== perbandingan penulisan ===");
console.log("biasa :", kuadratbiasa(5));
console.log("arrow :", kuadrat(5));
console.log("ringkas:", kuadratringkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;

console.log("Luas 4x6 :", luas(4, 6));
console.log(salam("Budi", "Pagi"));

function lakukanOperasi(angka, operasiCallback) {
  console.log(`Angka awal: ${angka}`);
  const hasil = operasiCallback(angka);
  console.log(`Hasil setelah operasi: ${hasil}`);
}
console.log("\n=== Callback ===");

lakukanOperasi(7, kuadratringkas);
lakukanOperasi(10, (x) => x + 100);
lakukanOperasi(20, function (x) {
  return x / 2;
});

console.log("\n=== setTimeout (Callback) ===");
console.log("Pesan 1: Sebelum timer");
setTimeout(() => {
  console.log("Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)");
}, 1000);
console.log("Pesan 2: Setelah mendaftarkan timer");

//latihan2

const keHurufBesar = (str) => str.toUpperCase();

const tambahSeru = (str) => str + "!!!";

const hitungKata = (str) => str.split(" ").length;

function prosesKalimat(kalimat, transformasiCallback) {
  const hasil = transformasiCallback(kalimat);
  console.log(`Hasil: ${hasil}`);
}

const kalimat = "belajar javascript itu menyenangkan";

console.log("=== Uji keHurufBesar ===");
prosesKalimat(kalimat, keHurufBesar);

console.log("\n=== Uji tambahSeru ===");
prosesKalimat(kalimat, tambahSeru);

console.log("\n=== Uji hitungKata ===");
prosesKalimat(kalimat, hitungKata);
