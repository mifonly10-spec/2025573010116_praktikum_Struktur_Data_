// 2. Function rekursif pangkat
function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1; // base case
  return basis * pangkat(basis, eksponen - 1);
}

// Uji pangkat
console.log("=== Pangkat ===");
console.log("2^3 =", pangkat(2, 3)); // 8
console.log("5^2 =", pangkat(5, 2)); // 25
console.log("3^4 =", pangkat(3, 4)); // 81

// 3. Function rekursif balik string
function balikString(str) {
  if (str.length <= 1) return str; // base case
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// Uji balik string
console.log("\n=== Balik String ===");
console.log("halo ->", balikString("halo"));
console.log("javascript ->", balikString("javascript"));

// 4. Function cek palindrom
function cekPalindrom(str) {
  const hasilBalik = balikString(str);
  return str === hasilBalik;
}

// Uji palindrom
console.log("\n=== Cek Palindrom ===");
const kataList = ["katak", "civic", "level", "halo"];

kataList.forEach((kata) => {
  const hasil = cekPalindrom(kata);
  console.log(`${kata} -> ${hasil ? "Palindrom" : "Bukan Palindrom"}`);
});
