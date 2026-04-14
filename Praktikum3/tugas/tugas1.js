// 2. Data mahasiswa
const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dina", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fajar", nilai: 50 },
];

// 3. Function hitung statistik
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, mhs) => {
      acc.total++;
      acc.totalNilai += mhs.nilai;
      acc.tertinggi = Math.max(acc.tertinggi, mhs.nilai);
      acc.terendah = Math.min(acc.terendah, mhs.nilai);
      return acc;
    },
    {
      total: 0,
      totalNilai: 0,
      tertinggi: -Infinity,
      terendah: Infinity,
    },
  );

  return {
    total: hasil.total,
    rataRata: hasil.totalNilai / hasil.total,
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah,
  };
}

// 4. Function filter lulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
}

// 5. Function tambah grade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map((mhs) => {
    let grade;
    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

// 6. Menjalankan semua function
const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 70);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

// Output
console.log("=== Statistik Mahasiswa ===");
console.log(`Total: ${statistik.total}`);
console.log(`Rata-rata: ${statistik.rataRata}`);
console.log(`Tertinggi: ${statistik.tertinggi}`);
console.log(`Terendah: ${statistik.terendah}`);

console.log("\n=== Mahasiswa Lulus ===");
mahasiswaLulus.forEach((mhs, i) => {
  console.log(`${i + 1}. ${mhs.nama} - ${mhs.nilai}`);
});

console.log("\n=== Mahasiswa + Grade ===");
mahasiswaDenganGrade.forEach((mhs, i) => {
  console.log(`${i + 1}. ${mhs.nama} - ${mhs.nilai} (Grade: ${mhs.grade})`);
});
