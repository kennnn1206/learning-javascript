// function square(number){
//     return number * number 
// }


// const squareExpresstion = function(number){
//     number * number
// }


// function squarevoid (){
//     const a=4 
//     const b=5
//     console.log(a*b)
// }

// const createpet = function (name) {
//     let sex 
//     let description
//     const pet = {
//         setname (newname){
//              name = newname
//         },
//         getname(){
//             return name
//         },
//         getsex(){
//            return sex
//         },
//         setsex(newsex) {
//             if(typeof newsex === "string"){
//               sex = newsex
//             }
//         },
//         setdescription(txt){
//             description = txt
//         },
//         getdescription(){
//             return description
//         }
//     }
//     return pet
// }


// const squarearrowfunction = (number) => number * number
// const square2 = (number) => {
//     return number * number
// }




// 1. Viết một hàm JavaScript để tính tổng của hai số nguyên và in ra kết quả.

// function sum (a,b){
//     return a + b
// }
// const tong = sum(3,4)
// console.log(tong)


// 2. Tạo một hàm JavaScript để tính giá trị tuyệt đố (|a|) của một số và in ra nó.


// function giatrituyetdoi(a){
//     return Math.abs(a)
// }
// console.log(giatrituyetdoi(-5))


// 5. Viết chương trình JavaScript để chuyển đổi nhiệt độ từ độ Celsius (C) sang độ Fahrenheit (F) bằng cách sử dụng một hàm.

// const celsiusToFahrenheit = (celsius) => {
//       const newTem = celsius *9/5 + 32
//       return newTem
// }
// console.log(celsiusToFahrenheit(10))

// 7. Viết hàm JavaScript để tìm số nguyên tố trong một mảng và in ra kết quả.

// function isPrime(number) {
//     if (number === 1) {
//         return false
//     }
//     if (number === 2 || number === 5 || number === 3 || number === 7) {
//         return true
//     }
//     if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
//         return true
//     }
//     return false
// }
// function findPrime(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) { // i=0 => arr[i] = 2
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(findPrime([2, 3, 6, 8, 9, 13, 1, 14, 17]))

//3. Viết hàm JavaScript để kiểm tra xem một số có phải là số chẵn hay không, và in ra kết quả.

// function kiemtra(n) {
//     if(n % 2 === 0){
//         return n;
//     }
// }
// console.log(kiemtra(4),"là số chẵn")

// 4. Tạo một hàm JavaScript để tính diện tích của hình chữ nhật với chiều rộng và chiều cao được truyền vào.

// function dientich(a,b){
//     let S = a * b ;
//     return S;
// }
// console.log(dientich(3,5))

// 6. Tạo một hàm JavaScript để tính giai thừa của một số nguyên dương và in ra kết quả.
 
// function giaithua(n){
//    let giaithua = 1 
//    for(let i = 1; i <= n; i++){
//         giaithua = giaithua * i
//     }
//     return giaithua;
// }
// console.log(giaithua(5))

// 8. Tạo một hàm JavaScript để đảo ngược một chuỗi và in ra chuỗi đảo ngược.

// function daonguoc(txt){
//     let newtext = ""
//     for(let i = txt.length -1 ;i >=0;i--){
//         newtext += txt[i]
//     }
//     return newtext
// }
// console.log(daonguoc("hello"))

// 11.Viết hàm JavaScript để kiểm tra xem một số nguyên có phải là số hoàn hảo (số có tổng các ước của nó bằng chính nó) hay không và in ra kết quả.

// function ktsohoanhao(n) {
//     let dem = 0
//     let sum = 0
//     for(let i=1; i<=n; i++) {
//         if(n%i==0){
//           dem+=i;
//          }
//     }
//     sum = sum+dem;
//     if(sum==2*n){
//     	return n
// 	}
// }
// console.log(ktsohoanhao(6),"là số hoàn hảo")

// 12. Tạo một hàm JavaScript để tính lãi suất đơn giản cho một số tiền gửi dựa trên số tiền, lãi suất và thời gian gửi.

// function laisuatguitien(tiengui, laisuat, thang) {
//     return (tiengui / 100) * laisuat * thang + tiengui;
// }
// console.log(laisuatguitien( 5000000000,5.3,2))

// 13.Viết hàm JavaScript để tính giá trị bình phương của một số nguyên được truyền vào và in ra kết quả.

// function binhphuong(n) {
//     return n * n
// }
// console.log(binhphuong(5))

// 14. Tạo một hàm JavaScript để kiểm tra xem một số có phải là số nguyên tố hay không và in ra kết quả.

// function nto(n) {
//     if(n === 1){
//         return false 
//     }
//     if(n === 2 || n === 3 || n ===5 || n === 7){
//         return true
//     }
//     if(n%2 !== 0 && n%3 !== 0 && n%5 !== 0 && n%7 !== 0){
//        return true
//     }
// }
// function ktra(n){
//     if(nto(n)){
//         return n
//     }
// }

// console.log(ktra(2),"là số nguyên tố")

// 15. Viết chương trình JavaScript để tìm số lớn nhất trong một mảng các số nguyên bằng cách sử dụng một hàm.

// function ktramax(arr) {
//     let max = 0
//     for(let i=0;i<arr.length;i++){
//         if(max < arr[i]){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(ktramax([2, 3, 6, 8, 9, 13, 1, 14, 17]))

// 10. Tạo một hàm JavaScript để tính tổng của mảng các số nguyên được truyền vào.

// function sum(arr){
//     let tong = 0
//     for(let i=0;i<arr.length;i++){
//         tong += arr[i]
//     }
//     return tong
// }
// console.log(sum([2, 3, 6, 8, 9, 13, 1, 14, 17]))

// 9. Viết chương trình JavaScript để kiểm tra xem một chuỗi có phải là chuỗi Palindrome (chuỗi đối xứng) hay không bằng cách sử dụng một hàm.

// function doixung(txt){
//     let newtext = ""
//     for(let i = txt.length -1 ;i >=0;i--){
//         newtext += txt[i]
//     }
//     return newtext === txt;
// }
// console.log(doixung("abba"))