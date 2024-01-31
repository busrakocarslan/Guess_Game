const number = Math.trunc(Math.random() * 100);
console.log(number);

let hak = +prompt(
  "Tahmin oyununa hoş geldiniz! Lütfen talep ettiğiniz deneme sayısini giriniz:"
);

for (let i = hak - 1; i >= 0; --i) {
  let sayi = +prompt("Lütfen bir sayi giriniz.");
  if (number === sayi) {
    alert("Tebrikler. Kazandınız!");
    break;
  } else if (i == 0) {
    alert(`Üzgünüm, hakkınız sona erdi! Doğru sayı ${number} `);
    break;
  } else if (number > sayi && i !== 0) {
    alert(`Lütfen daha büyük bir sayi giriniz. Kalan hakkınız ${i}!`);
  } else if (number < sayi && i !== 0) {
    alert(`Lütfen daha küçük bir sayi giriniz.Kalan hakkınız ${i}!`);
  }
}

// if (isNaN(hak)) {
//   alert("Lütfen sadece rakam giriniz");
// } else {
//   for (let i = hak - 1; i >= 0; --i) {
//     let sayi = +prompt("Lütfen bir sayi giriniz.");
//     if (isNaN(sayi)) {
//       alert("Lütfen sadece rakam giriniz");
//     } else if (number === sayi) {
//       alert("Tebrikler. Kazandınız!");
//       break;
//     } else if (i === 0) {
//       alert(`Üzgünüm, hakkınız sona erdi! Doğru sayı ${number} `);
//       break;
//     } else if (number > sayi && i !== 0) {
//       alert(`Lütfen daha büyük bir sayı giriniz. Kalan hakkınız ${i}!`);
//     } else if (number < sayi && i !== 0) {
//       alert(`Lütfen daha küçük bir sayı giriniz. Kalan hakkınız ${i}!`);
//     }
//   }
// }
