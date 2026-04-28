// tugas/tugas-2.js

// O(1): operasi konstan
function fn_O1(n) {
  return n + 1;
}

// O(n): loop linear
function fn_On(n) {
  let jumlah = 0;
  for (let i = 0; i < n; i++) {
    jumlah += i;
  }
  return jumlah;
}

// O(n log n): loop luar n kali, loop dalam log2(n) kali
function fn_OnLogn(n) {
  let jumlah = 0;
  const logN = Math.floor(Math.log2(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < logN; j++) {
      jumlah += j;
    }
  }
  return jumlah;
}

// O(n^2): nested loop n × n
function fn_On2(n) {
  let jumlah = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      jumlah += i + j;
    }
  }
  return jumlah;
}

// Function benchmark semua
function benchmarkSemua(ukuranData) {
  ukuranData.forEach((n) => {
    console.log(`\nBenchmark untuk n = ${n}`);

    let start, end;

    start = process.hrtime.bigint();
    fn_O1(n);
    end = process.hrtime.bigint();
    console.log(`fn_O1 (O(1))      : ${end - start} ns`);

    start = process.hrtime.bigint();
    fn_On(n);
    end = process.hrtime.bigint();
    console.log(`fn_On (O(n))      : ${end - start} ns`);

    start = process.hrtime.bigint();
    fn_OnLogn(n);
    end = process.hrtime.bigint();
    console.log(`fn_OnLogn (O(nlogn)): ${end - start} ns`);

    start = process.hrtime.bigint();
    fn_On2(n);
    end = process.hrtime.bigint();
    console.log(`fn_On2 (O(n^2))   : ${end - start} ns`);
  });
}

// Jalankan benchmark
benchmarkSemua([100, 500, 1000, 5000, 10000]);

/*
Observasi pola pertumbuhan:
1. fn_O1 -> waktu relatif stabil walaupun n bertambah besar.
   Ini sesuai teori Big O karena O(1) tidak dipengaruhi ukuran input.

2. fn_On -> waktu bertambah secara linear.
   Jika n naik 10x, waktu eksekusi kira-kira ikut naik mendekati 10x.

3. fn_OnLogn -> waktu bertambah lebih cepat dari O(n),
   tetapi lebih lambat dari O(n^2). Ini sesuai teori O(n log n).

4. fn_On2 -> waktu meningkat sangat cepat ketika n bertambah.
   Jika n naik 10x, waktu bisa naik mendekati 100x.
   Ini konsisten dengan teori O(n^2).

Kesimpulan:
Pola hasil benchmark umumnya konsisten dengan teori Big O,
meskipun ada sedikit variasi karena faktor CPU, memori, dan sistem operasi.
*/
