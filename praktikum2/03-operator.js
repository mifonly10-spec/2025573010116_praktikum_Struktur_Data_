// 03-operator.js
// ================================================
// OPERATOR JAVASCRIPT
// ================================================
// --- OPERATOR ARITMATIKA ---
let a = 17;
let b = 5;

console.log('=== Aritmatika ===');
console.log(`${a} + ${b} = ${a + b}`); // 22
console.log(`${a} - ${b} = ${a - b}`); // 12
console.log(`${a} * ${b} = ${a * b}`); // 85
console.log(`${a} / ${b} = ${a / b}`); // 3.4
console.log(`${a} % ${b} = ${a % b}`); // 2 (sisa bagi: 17 = 5x3 + 2)
console.log(`${a} ** ${b} = ${a ** b}`); // 1419857 (17 pangkat 5)

// --- OPERATOR PERBANDINGAN ---
console.log('=== Perbandingan ===');
console.log('10 > 5 :', 10 > 5); // true
console.log('10 < 5 :', 10 < 5); // false
console.log('10 >= 10 :', 10 >= 10); // true
console.log('10 <= 9 :', 10 <= 9); // false

// Perbedaan == dan ===
console.log('--- Perbedaan == dan === ---');
console.log('5 == "5" :', 5 == '5'); // true (JANGAN gunakan ini!)
console.log('5 === "5" :', 5 === '5'); // false (SELALU gunakan ini)
console.log('5 !== 3 :', 5 !== 3); // true (tidak sama dengan)
// --- OPERATOR LOGIKA ---

console.log('=== Logika ===');
let sudahMakan = true;
let punyaUang = false;

// AND (&&): kedua kondisi harus true
console.log('Makan && Uang :', sudahMakan && punyaUang); // false

// OR (||): salah satu kondisi cukup true
console.log('Makan || Uang :', sudahMakan || punyaUang); // true

// NOT (!): membalik nilai boolean
console.log('!sudahMakan :', !sudahMakan); // false
console.log('!punyaUang :', !punyaUang); // true

//latihan

const panjang ='12';
const lebar ='8';

console.log('=== hitung luas persegi panjang===');
console.log('{panjang =${panjang} lebarf = ${lebar}');
console.log('luas persegi panjang =${panjang * lebar}');

console.log('=== hitung keliling persegi panjang===');
console.log('panjang = ${panjang}  lebar = ${lebar}');
console.log('keliling persegi panjang =${2* panjang * lebar}');

console.log('===logika true and false===');

let luas =96

if(luas > 100){
    console.log('hasilnya adalah : true');
}
    else{
        console.log('hasilnya adalah :false');

    }
    