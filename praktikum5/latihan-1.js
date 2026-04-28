// Latihan 1: Identifikasi Kompleksitas

// Fungsi A
// Big O: O(1)
// Alasan: Operasi konstan, tidak tergantung n
function fnA(n) {
  return n * 2;
}

// Fungsi B
// Big O: O(n^2)
// Alasan: Dua loop bersarang, masing-masing berjalan n kali
function fnB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// Fungsi C
// Big O: O(log n)
// Alasan: Nilai i dikali 2 setiap iterasi (pertumbuhan eksponensial)
function fnC(n) {
  for (let i = 1; i < n; i *= 2) {
    console.log(i);
  }
}

// Fungsi D
// Big O: O(n^3)
// Alasan: Tiga forEach bersarang (triple nested loop)
function fnD(arr) {
  arr.forEach(x => {
    arr.forEach(y => {
      arr.forEach(z => {
        console.log(x, y, z);
      });
    });
  });
}

// Fungsi untuk mengukur waktu eksekusi
function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log(`Waktu eksekusi: ${end - start} ms\n`);
}

// Jalankan semua fungsi
const n = 1;

console.log("Fungsi A:");
hitungKompleksitas(n, fnA);

console.log("Fungsi B:");
hitungKompleksitas(n, fnB);

console.log("Fungsi C:");
hitungKompleksitas(n, fnC);

console.log("Fungsi D:");
const arr = Array.from({ length: 1 }, (_, i) => i);
const startD = Date.now();
fnD(arr);
const endD = Date.now();
console.log(`Waktu eksekusi: ${endD - startD} ms\n`);