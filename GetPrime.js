/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 7.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst

Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number. 
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.

Contoh 1:

input: 10
output: [ 2, 3, 5, 7 ]

//karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]

// karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- wajib membuat algoritma/pseudocode untuk program getPrime

note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
*/

function getPrime(num) {
  // sebagai penampung angka prima
  var prima = []
  
  //loop untuk mengecek apakah angka itu prima atau bukan
  for (var i = 1; i <= num; i++) {
    // sebagai pengecekan angka prima
    var check = 0
    for (var j = i; j > 0; j--) {
      //kalau i dimodulus angka j = 0
      // tambah check dengan 1
      if (i % j === 0) {
        check += 1;
      }
    }

    //kalau var check berjumlah 2 maka itu sudah dipastikan bilangan prima
    if (check === 2) {
      prima.push(i)
    }
  }
  return prima
}


console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []