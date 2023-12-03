// Bài tập 5: Tìm giá trị trung bình của các số trong một mảng.

// const arrNumber = [4,7,8,2,6,3,5,1,6,9]
// let count = 0
// let sum = 0
// let tbc = 0
// arrNumber.forEach((Element) =>{
//      count++
//      sum += Element
//      tbc = sum/count
// })
// console.log(tbc)


// Bài tập 8: Tìm chuỗi dài nhất trong một mảng các chuỗi.

// const maxword = (string) => {
//      let max = 0
//          word = ""
//      for(let i=0;i<string.length;i++){
//           if(string[i].length>max){
//                max = string[i].length
//                word = string[i]
//           }
//      }
//      return word
// }
// console.log(maxword(["Trong","Tuấn Anh","Dung","Đạt"]))

// Bài tập 9: Viết hàm thực hiện phép cộng 2 ma trận số nguyên.

// let arr1 = [
//      [1, 2, 3],
//      [2, 3, 4],
//  ],
//  arr2 = [
//      [4, 5, 6],
//      [5, 6, 7],
//  ];
// const sum = (arr1,arr2) => {
//      let arr3 = [[],[]]
//      for(let i=0;i<arr1.length;i++){
//           for(let j=0;j<arr2.length;j++){
//                arr3[i][j] = arr1[i][j] + arr2[i][j]
//           }
//      }
//      return arr3
// }
// console.log(sum(arr1,arr2))
// 10.Tìm và xóa tất cả các phần tử bị lặp lại trong một mảng số.

// const arrNumber = [1, 3, 4, 5, 32, 12, 4, 40, 40, 40, 40, 5, 6, 45, 1, 32, 47, 54];
// const xoamang = (arr) =>{
//      let newarr = []
//      for(let i=0;i<arrNumber.length;i++){
//           let ok=1;
//           for(let j=0;j<i;j++){
//                if(arr[j]===arr[i]){
//                     ok=0;
//                }
//           }
//           if(ok===1){
//                newarr.push(arr[i])
//           }
//      }
//      return newarr
// }
// console.log(xoamang(arrNumber))


// Bài tập 12: Viết hàm tính tổng các số chia hết cho 3 hoặc 5 trong một khoảng từ 0 đến n.

// const arrNumber = [
//     1,  3, 4,  5, 32,
//    12, 40, 6, 45, 47,
//    54
// ]
// const reArrNumber = (arr) => {
//         const newArr = arr.filter(element => element % 3 === 0 || element % 5 === 0)
//         return newArr
// }
// const tinh = (arr) => {
//     let sum = 0
//     reArrNumber(arr).forEach((element) => {
//               sum += element     
//     })
//     return sum
// }
// console.log(tinh(arrNumber))

// Bài tập 13: Tìm và in ra các số nguyên tố đầu tiên trong một mảng có kích thước n.

// function nto(n) {
//     for(let i=2;i<= Math.sqrt(n);i++){
//         if(n % i === 0){
//                return false
//         }
//     }
//     return true
// }

// const tim = (arr) => {
//     return arr.filter((number) => nto(number))
// }
// console.log(tim([3,5,40,6,45,54]))

// Bài tập 15: Kiểm tra xem một chuỗi có phải là chuỗi Palindrome không (chuỗi đối xứng khi đọc từ trái sang phải hoặc từ phải sang trái đều giống nhau).

// const trunglap = (string) =>{
//      let l = 0
//      let r = string.length - 1
//      while(l < r){
//         if(string[l] === string[r]){
//             return true
//         }
//         else {
//             l++, r--;
//         }
//      }
//     return false
// }
// console.log(trunglap("abddba"))

// Bài tập 4: Viết hàm chia một mảng thành các mảng con có kích thước nhất định.

// arr = [1, 3, 4, 5, 32, 12, 4, 40, 40, 40, 40, 5, 6, 45, 1, 32, 47, 54];
// const smallArr = (arr, number) => {
//     for (let i = 0; i < arr.length - number + 1; i++) {
//         let newArr = [];
//         for (let j = 0; j < number; j++) {
//             newArr.push(arr[i + j]);
//         }
//         console.log(newArr);
//         newArr.clear;
//     }
// };
// smallArr(arr, 3);