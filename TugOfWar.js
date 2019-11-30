/*
=============
TUG OF WAR WINNER
=============
Name :_____________
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang antara 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level 
  - A = 1 
  - B = 2
  - C = 3

Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilnya akan draw

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!

[Tulis PSEUDOCODE di bawah ini]
akan ada dua tim, var power1 sebagai tim kiri dan var power2 sebagai tim kanan
akan ada var temp yang berisikan RegEx yang akan menampilkan array bila ada huruf UpperCase A-Z lebih dari 1 index

lalu saya menggunakan loop untuk melakukan penjumlahan power disetiap tim
setelah mendapatkan total power kedua tim tinggal di compare

kalau power1 lebih dari power2 maka tim kiri menang sebaliknya tim kanan menang
kalau kedua tim memiliki power sama maka akan mereturn DRAW
kalau var temp menghasilkan nilai Null maka akan mereturn NO PLAYERS
*/

function tugOfWar(sentence) {
  var power1 = 0
  var power2 = 0
  var temp = sentence.match(/[A-Z]\w+/g)

  if (temp === null) {
    return 'NO PLAYERS'
  }

  for (var i = 0; i < temp.length; i++ ) {
    for (var j = 0; j < temp[i].length; j++) {
      if (i === 0) {
        if (temp[i][j] === 'A') {
          power1 += 1
        } else if (temp[i][j] === 'B') {
          power1 += 2
        } else if (temp[i][j] === 'C') {
          power1 += 3
        }
      } else if (i === 1) {
        if (temp[i][j] === 'A') {
          power2 += 1
        } else if (temp[i][j] === 'B') {
          power2 += 2
        } else if (temp[i][j] === 'C') {
          power2 += 3
        }
      }
    }
  }

  if (power1 > power2) {
    return 'Team Kiri Menang!'
  } else if (power1 < power2) {
    return 'Team Kanan Menang!'
  } else if (power1 === power2) {
    return 'DRAW'
  }
    
}


console.log(tugOfWar('ABCA--V--ABCC')); // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')); // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')); // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')); // 'DRAW'
console.log(tugOfWar('--V--')); // 'NO PLAYERS'