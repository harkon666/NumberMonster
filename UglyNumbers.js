/*

Ugly numbers adalah angka yang jika dibagi dengan faktor prima angka 2, 3 atau 5 menghasilkan angka 1.

Contoh 1:
4 merupakan ugly number karena
Proses:
  1. 4 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 2
     2 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 4 merupakan ugly number

contoh 2:
15 merupakan ugly number karena
Proses:
  1. 15 dibagi 2 menghasilkan sisa bagi > 0, maka akan melanjutkan ke step 2
  2. 15 dibagi 3 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 15 merupakan ugly number

contoh 3:
17 bukan ugly number karena
Proses:
  1. 17 dibagi 2 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 2
  2. 17 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 17 dibagi 5 menghasilkan sisa bagi > 0 dan hasilnya bukan 1

Maka 17 bukan ugly number

contoh 4:
20 merupakan ugly number karena
Proses:
  1. 20 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 10
     10 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 2 menghasilkan sisa bagi > 0 maka lanjut ke step 2
  2. 5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 20 merupakan ugly number

Buatlah sebuah function getUglyNumber dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan ugly number 
sampai angka parameter tersebut.

Contoh 1:
input: 10
output: [ 2, 3, 4, 5, 6, 8, 9, 10 ]

Contoh 2:
input: 20
output: [ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]

RULE:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE

*/

function getUglyNumber(num) {
  //sebagai penampung angka jelek wkwkkwkw
  var angkaJelek = []
  //sebagai faktor prima yang ada di soal yang menentukan apakah angka itu jelek? wkwkkw
  var primaJelek = [2,3,5]

  //loop untuk perulangan parameter num
  for (var i = 1; i <= num; i++) {
    //sebagai penampung ketika dibagi sama angka primaJelek
    var angka = i;
    // sebagai flag
    var is = false
    //loop untuk memfaktorkan dengan var primaJelek wkwkwk
    for (var j = 0; j < primaJelek.length; j++) {
      //kalau var kosong modulus angka primaJelek = 0 maka akan masuk ke step selanjutnya
      // dan dibagi primaJelek = 1 maka itu angkaJelek

      //loop untuk mengulang step
      for (var k = 1; k <= num; k++) {
        if (angka % primaJelek[j] === 0) {
          if (angka / primaJelek[j] === 1 && is === false) {
            angkaJelek.push(i)
            is = true
          } else if (angka > primaJelek[j]) {
            angka /= primaJelek[j]
          }
        }
      }  
    }
  }
  return angkaJelek
}

console.log(getUglyNumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
console.log(getUglyNumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
console.log(getUglyNumber(4)); //[ 2, 3, 4]
console.log(getUglyNumber(1)); //[]