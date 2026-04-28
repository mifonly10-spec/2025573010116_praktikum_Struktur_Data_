// =============================
// TUGAS 1 - ANALISIS & REFACTOR
// =============================

// =============================
// FUNGSI A: INTERSECTION ARRAY
// =============================

// O(n^2)
// Time: O(n^2)
// Space: O(1)
function intersectionN2(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// O(n) menggunakan Set
// Time: O(n)
// Space: O(n)
function intersectionSet(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}

// =============================
// FUNGSI B: KELOMPOK ANAGRAM
// =============================

// Time: O(n * k log k)
// Space: O(n)
function groupAnagrams(arr) {
  const map = new Map();

  for (let word of arr) {
    const key = word.split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}

// =============================
// FUNGSI C: CEK a + b = c^2
// =============================

// O(n^3)
// Time: O(n^3)
// Space: O(1)
function checkSumSquareN3(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k && i !== k) {
          if (arr[i] + arr[j] === arr[k] * arr[k]) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

// O(n log n)
// Time: O(n log n)
// Space: O(1)
function checkSumSquareOptimized(arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;

  for (let k = n - 1; k >= 0; k--) {
    let left = 0;
    let right = k - 1;
    const target = arr[k] * arr[k];

    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}

// =============================
// TEST & BENCHMARK
// =============================

function generateArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
}

const arr1 = generateArray(5000);
const arr2 = generateArray(5000);
const words = ['eat','tea','tan','ate','nat','bat'];
const numbers = generateArray(1000);

console.log("\n=== FUNGSI A ===");
console.time("O(n^2)");
intersectionN2(arr1, arr2);
console.timeEnd("O(n^2)");

console.time("O(n)");
intersectionSet(arr1, arr2);
console.timeEnd("O(n)");

console.log("\n=== FUNGSI B ===");
console.log(groupAnagrams(words));

console.log("\n=== FUNGSI C ===");
console.time("O(n^3)");
checkSumSquareN3(numbers);
console.timeEnd("O(n^3)");

console.time("O(n log n)");
checkSumSquareOptimized(numbers);
console.timeEnd("O(n log n)");

// Jalankan dengan:
// node tugas/tugas-1.js
