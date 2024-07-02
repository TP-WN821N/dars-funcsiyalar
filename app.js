// 1. sodda kalkulyator yarating prompt dan foydalaning
// const calculyator = () => {
//   let a = +prompt("a =")
//   let amal = prompt("Qanday amal (+,-,*,/)")
//   let b = +prompt("b =")
//   let natija = null;
//   if (amal == '+') {
//     natija = a + b
//   } else if (amal == '-') {
//     natija = a - b
//   } else if (amal == '*') {
//     natija = a * b
//   } else if (amal == '/') {
//     natija = a / b
//   } else {
//     console.log(`${amal} bunday amal yo'q`);
//   }
//   console.log(natija);
// }
// calculyator()

// 2. prompt da kiritilgan son musbat bo’lsa unga qiymatini 1ga kamaytirsin manfiy bo’lsa 1 ga oshirsin
// const result = () => {
//   let a = prompt("a = ")
//   if (a > 0) {
//     console.log(a - 1);
//   } else if (a < 0) {
//     console.log(a + 1);
//   }
// }
// result()

// 3. argument sifatida qabul qilgan sonni teskari qiluvchi arrow function yarating kiritilgan sonni
// 2 xonaligini tekshiring va bu function faqat 2 xonali son uchun ishlasin
// const result = (num) => {
//   if (num > 9 && num < 100) {
//     let last = Math.floor(num / 10)
//     let first = num % 10
//     let reset = +`${first}${last}`
//     console.log(reset);
//   } else {
//     console.log("2xonali son kiriting");
//   }
// }
// result(29)

// 4. 3-savolni 3 xonali son uchun ham bajaring
// const result = (num) => {
//   if (num > 9 && num < 1000) {
//     let last = Math.floor(num / 100)
//     let cen = Math.floor(num / 10 - 10 * last)
//     let first = Math.floor(num % 10)
//     let reset = +`${first}${cen}${last}`
//     console.log(reset);
//   } else {
//     console.log("3xonali son kiriting");
//   }
// }
// result(456)

// 5. student baliga qarab o’qishga kirgan mavqeini aniqlang 100% - 70% bo’lsa budjet 70% - 50%
// contract 50% dan past bo’lsa yiqildi bu savolni function decloration dan foydalanib bajaring student
// balini function ga argument sifatida kiritilsin
const mandat = (ball) => {
  if (ball >= 70) {
    console.log("budjet");
  } else if (ball >= 50) {
    console.log('contract');
  } else {
    console.log("Yiqildingiz !");
  }
}