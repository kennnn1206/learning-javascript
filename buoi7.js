// 1. Viết chương trình nhận hai số làm đầu vào và hiển thị tổng của chúng.

// const tong = (a,b) =>{
//     return a+b;
// }
// console.log(tong(2,3))

// 7. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và sắp xếp danh sách theo thứ tự alphabet.

// const timchuoi = (arr) =>{
//     return arr.sort()
// }
// console.log(timchuoi(["apple", "banana", "orange", "kiwi", "grape"]))


// 8. Viết chương trình nhận một danh sách các số làm đầu vào và trả về số trung vị của các số. .

// const  arrNumber = [1,5,8,11,15,19,25]
// const trungvi = (arr) =>{
//     let n = Math.floor(arr.length / 2);
//     return arr[n+1]
// }
// console.log(trungvi(arrNumber))

//bai 10
// const kt2 = (s) => {
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "a") {
//             return true;
//         }
//     }
//     return false;
// };
// const kt = (arr) => {
//     let dem = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (kt2(arr[i]) === true) {
//             dem++;
//         }
//     }
//     return dem;
// };
// console.log(kt(["phan", "dang", "dung"]));

// 1. Viết chương trình nhận một danh sách các số làm đầu vào và trả về số lớn thứ hai trong danh sách.

// const min2 = (arr) => {
//     const a = arr.sort((a,b) => a-b);
//     return a[a.length-2];
// };
// console.log(min2([70, 11, 20, 4, 100]))

// //Bai 2
// const length = (string) => {
//     return string.length;
// };

// //Bai 3
// const pow = (a) => {
//     return a * a;
// };

//Bai 4
// const max = (a) => {
//     let max1 = -Infinity;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > max1) {
//             max1 = a[i];
//         }
//     }
//     return max1;
// };

// //Bai 5
// const max2 = (arr) => {
//     let max = -1,
//         s = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > max) {
//             max = arr[i].length;
//             s = arr[i];
//         }
//     }
//     return s;
// };
// console.log(max2(["phan", "fdjdjfdj", "dsjdfjfjdfjdj"]));

// //Bai 6
// const increase = (arr) => {
//     return arr.sort((a, b) => a - b);
// };

// console.log(increase([2, 1, 5, 4, 3, 6, 7, 0]));

// //bai 9
// const number = (s) => {
//     return s.split(" ").length;
// };
// console.log(number("hello world"))

// //Bai 2.1
// const max2 = (arr) => {
//     let max = -1,
//         s = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > max) {
//             max = arr[i].length;
//             s = arr[i];
//         }
//     }
//     return s;
// };
// console.log(max2([“abcdef", “abczyzcdef”]));

// // 4.1 Viết chương trình nhận một danh sách các số làm đầu vào và trả về tổng của các số chia hết cho cả 3 và 5.

// const arrNumber = [
//         1,  3, 4,  5, 32,
//        12, 40, 6, 45, 47,
//        54
//     ]
//     const reArrNumber = (arr) => {
//             const newArr = arr.filter(element => element % 3 === 0 || element % 5 === 0)
//             return newArr
//     }
//     const tinh = (arr) => {
//         let sum = 0
//         reArrNumber(arr).forEach((element) => {
//                   sum += element     
//         })
//         return sum
//     }
//     console.log(tinh(arrNumber))


// 1.3 Viết chương trình nhận một danh sách các số làm đầu vào và trả về số nhỏ thứ hai trong danh sách.

// const min2 = (arr) => {
//     const a = arr.sort((a,b) => b-a);
//     return a[a.length-2];
// };
// console.log(min2([70, 11, 20, 4, 100]))

// 2.3 Viết chương trình nhận một danh sách các số nguyên làm đầu vào và trả về hiệu số lớn nhất giữa hai phần tử trong danh sách.VD: [1, 2, 91, 9, 100] 👉 99 ( ket qua cua 100 - 1 )

// const maxhieu = (arr) => {
//      const a = arr.sort((a,b) => a-b);
//      return a[a.length-1] - a[0];
// };
// console.log(maxhieu([1, 2, 91, 9, 100]))


// 6 Viết chương trình nhận hai danh sách các số nguyên làm đầu vào và trả về số trung vị của danh sách kết hợp.

// function findMedian(nums1, nums2) {
//     const nums3 = nums1.concat(nums2).sort((a, b) => a - b);
//     const n = nums3.length;
//     if (n % 2 === 0) {
//         const trungvi1 = nums3[n / 2 - 1];
//         const trungvi2 = nums3[n / 2];
//         return (trungvi1 + trungvi2) / 2;
//     } else {
//         return nums3[Math.floor(n / 2)];
//     }
// }
// const list1 = [1, 3, 5];
// const list2 = [2, 4, 6];
// console.log("Số trung vị của hai danh sách là:", findMedian(list1, list2));

// 5 Viết chương trình nhận một danh sách các số làm đầu vào và trả về số nguyên dương nhỏ nhất không thể biểu diễn được bằng tổng của bất kỳ tập con nào trong danh sách.

// function smallestUnrepresentedInteger(nums) {
//     nums.sort((a, b) => a - b);

//     let result = 1;

//     // Duyệt qua từng số trong danh sách
//     for (let i = 0; i < nums.length; i++) {
//         // Nếu số hiện tại <= kết quả, cập nhật kết quả bằng tổng của số hiện tại và kết quả
//         if (nums[i] <= result) {
//             result += nums[i];
//         } else {
//             // Nếu số hiện tại > kết quả, kết quả là số nhỏ nhất không thể biểu diễn được
//             break;
//         }
//     }

//     return result;
// }

// // Đầu vào là danh sách các số
// const numberList = [1, 2, 3, 7, 8, 20];

// // Gọi hàm và in ra kết quả
// const result = smallestUnrepresentedInteger(numberList);
// console.log("Số nguyên dương nhỏ nhất không thể biểu diễn được:", result);

// 1.1reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )

// function reversearr(arr) {
//         const newarr = [];
//         arr.forEach(element => {
//             newarr.unshift(element)
//     });
//     return newarr;
// }
// const arrNumber=[1, 2, 3, 4, 5]
// console.log("Mảng sau khi đảo ngược:",reversearr(arrNumber))

// 1.3 uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng. 
  
// const deletearr = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };
// console.log(deletearr([1, 2, 3, 2, 4]));

//bai 1.2 chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định. 

    // function chiaMang(arr, so) {
    //     const dodai = (arr.length / so);
    //     const mangdachia = [];
    //     for (let i = 0; i < arr.length; i += dodai) {
    //         const phan = arr.slice(i, i + dodai);
    //         mangdachia.push(phan);
    //     }
    //     return mangdachia;
    // }
    // console.log(chiaMang(['a', 'b', 'c', 'd'],2));
    