// 2. Tạo một mảng số nguyên và sử dụng thuật toán tìm kiếm tuần tự để kiểm tra xem một số cụ thể có tồn tại trong mảng hay không.

// const arr = [1, 3, 2, 5, 7, 8, 0, 4, 6, 30, 29, 48, 50, 20, 32, 43, 57, 85]

// const findnumber = (number, arrs) => {
//     for(let i=0;i<arr.length;i++){
//         if(arrs[i] === number){
//             return true
//         }
//     }
// }
// const a = 30
// if(findnumber(a,arr)){
//     console.log("Số", a,"tồn tại trong mảng")
// }
// else {
//     console.log("Số", a,"không tồn tại trong mảng")
// }

// 3. Viết hàm JavaScript để sắp xếp một mảng số nguyên bằng thuật toán sắp xếp nổi bọt (bubble sort).

// function sapxepnoibot(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[i]){
//                 let tmp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = tmp;
//             }
//         }
//     }
//     return arr
// }
// console.log(sapxepnoibot([3,5,6,1,4,2,8,9,7]))

// 4.Tạo một mảng số nguyên và sử dụng thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự tăng dần.

// const arrnumber = [3,5,6,1,4,2,8,9,7]
// for(let i=0;i<arrnumber.length;i++){
//     for(let j=i+1;j<arrnumber.length;j++){
//         if(arrnumber[j]<arrnumber[i]){
//             let tmp = arrnumber[i];
//             arrnumber[i] = arrnumber[j];
//             arrnumber[j] = tmp;
//         }
//     }
// }
// console.log(arrnumber)

// 5. Viết chương trình JavaScript để tìm giá trị lớn nhất trong một mảng số nguyên bằng cách sử dụng thuật toán tìm kiếm tuần tự.

// const arrnumber = [3,5,6,1,4,2,8,9,7]
// let max = -Infinity
// for(let i=0;i<arrnumber.length;i++){
//     if(arrnumber[i] > max){
//         max = arrnumber[i]
//     }
// }
// console.log(max)

// 7. Viết hàm JavaScript để sắp xếp một mảng số nguyên theo thứ tự giảm dần bằng thuật toán sắp xếp nổi bọt.

// function sapxepnoibot(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] > arr[i]){
//                 let tmp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = tmp;
//             }
//         }
//     }
//     return arr
// }
// console.log(sapxepnoibot([3,5,6,1,4,2,8,9,7]))

// 9. Viết chương trình JavaScript để tìm phần tử nhỏ nhất trong một mảng số nguyên bằng thuật toán tìm kiếm tuần tự.

// const arrnumber = [3,5,6,1,4,2,8,9,7]
// let min = Infinity
// for(let i=0;i<arrnumber.length;i++){
//     if(arrnumber[i] < min){
//         min = arrnumber[i]
//     }
// }
// console.log(min)

// 10. Tạo một mảng số nguyên và sử dụng thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự giảm dần.

// const arrnumber = [3,5,6,1,4,2,8,9,7]
// for(let i=0;i<arrnumber.length;i++){
//     for(let j=i+1;j<arrnumber.length;j++){
//         if(arrnumber[j] > arrnumber[i]){
//             let tmp = arrnumber[i];
//             arrnumber[i] = arrnumber[j];
//             arrnumber[j] = tmp;
//         }
//     }
// }
// console.log(arrnumber)

// 11. Viết hàm JavaScript để thực hiện tìm kiếm tuần tự trong một mảng chuỗi và trả về vị trí của chuỗi cần tìm.

// const arrString = ["PHP", "Javascript", "Java", "Python", "C++"]
// const returnstring = (string) => {
//     console.log("Vị trí của chuỗi cần tìm là :", string)
// }
// const findstring = (arr,string) => {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === string){
//             return i
//         }
//     }
// }
// returnstring(findstring(arrString,"Java"))

// 15. Viết hàm JavaScript để thực hiện tìm kiếm tuần tự trong một mảng đối tượng và trả về các đối tượng thỏa mãn điều kiện cụ thể.

// const people = [
//     { name: "Dũng",
//       age: 25, 
//       city: "Anh" 
//     },
//     { name: "Mạnh", 
//       age: 30, 
//       city: "Đức" 
//     },
//     { name: "Đạt", 
//       age: 22, 
//       city: "Mỹ" 
//     },
//     { name: "Hà Anh", 
//       age: 22, 
//       city: "Anh" 
//     },
// ]
// const findstring = (arr,city) => {
//     let string = []
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].city === city){
//             string.push(arr[i].name)
//         }
//     }
//     return string
// }
// console.log(findstring(people,"Anh"))