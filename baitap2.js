// 1. Viết chương trình JavaScript để in ra tất cả các số từ 1 đến 10 bằng vòng lặp for.

// for(let i=1 ;i<=10 ;i++){
//     console.log(i);
// }

//2. Tạo một biến n và sử dụng vòng lặp for để tính tổng các số từ 1 đến n.

// const n=100;
// for(let i =0; i<n;i++){
//       console.log(i);
// }


// 4. Tạo một biến i và sử dụng vòng lặp for để tính giai thừa của i (i!) cho một giá trị i cụ thể.

// const n = 10
// let giaithua = 1 
// for(let i = 1; i <= n; i++){
//     giaithua = giaithua * i
// }
//   console.log(giaithua)


// 6. Tạo một biến n và sử dụng vòng lặp while để tính tổng các số từ 1 đến n mà là bội số của 3 hoặc 5.

// const n = 40 
// let sum = 0
// let i = 1
// while(i<=40){
//     if(i%3 === 0 || i%5 === 0){
//     sum += i;
//     }
//     i++;
// }
//    console.log(sum)

// 7. Viết chương trình JavaScript để tìm tất cả số nguyên tố từ 1 đến 50 bằng vòng lặp.

// const n = 50 
// for(let i=2;i <= n;i++){
//     let ok = 1
//     for(let j=2;j<i;j++){
//         if(i%j === 0){
//             ok = 0;
//         }
//     }
//     if(ok === 1 ){
//         console.log(i)
//     }
// }

// 9. Viết chương trình JavaScript để đảo ngược một chuỗi văn bản bằng vòng lặp (ví dụ: "hello" thành "olleh").

// const text = "hello"
// let newtext = ""
// for(let i = text.length -1 ;i >=0;i--){
//     newtext += text[i]
  
// }
//     console.log(newtext)


// 3. Viết chương trình JavaScript để in ra tất cả số chẵn từ 1 đến 20 bằng vòng lặp for

// for(let i=1; i<20; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// 5. Viết chương trình JavaScript để in ra bảng cửu chương từ 2 đến 9 bằng vòng lặp for.

// for(let i=2;i<=9;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i,"x",j,"=",i*j)
//     }
//     console.log("---")
// }

// 10. Tạo một biến year và sử dụng vòng lặp while để in ra tất cả các năm nhuận từ year đến year + 50.

// let year=2000
// while(year >= 2000 && year <= 2050){
//     if((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0 )
//     console.log(year)
//     year ++;
// }

// 11. Viết chương trình JavaScript để tạo một hình tam giác vuông bằng dấu sao (*) bằng vòng lặp.

// const n = 6;
// let tamgiacvuong = "";
// for(let i=1; i<=n; i++){
//     let a = "";
//     for(let j=1; j<=i; j++){
//         a += "*";
//     }
//     console.log(a);
// }
// console.log(tamgiacvuong);


// 14. Tạo một biến n và sử dụng vòng lặp while để in ra tất cả các số nguyên tố từ 1 đến n.

// const n=20;
// let i=2;
// while(i<=n){
//     if(i === 2 || i ===3 || i === 5 || i === 7 ){
//         console.log(i)
//     }
//     else if(i%2 !== 0 && i%3 !== 0 && i%5 !== 0 && n%7 !== 0){
//         console.log(i)
//     }
//     i++;
// }

// 13.Viết chương trình JavaScript để in ra tất cả các số Armstrong (số mà tổng lũy thừa của các chữ số bằng chính nó) từ 1 đến 100.

// function cnt(n){
//      let cnt=0;
//      while(n){
//         n/=10;
//         cnt++
//      }
//      return cnt;
// }
// function kt(n){
//     let sum=0, a=n;
//     let b=cnt(n);
//     while(n){
//         sum += Math.pow(n%10,b);
//         n/=10;
//     }
//     return sum === a;
// }
// for(let i=1;i<=100;i++){
//     if(kt(i) === true){
//         console.log(i);
//     }
// }

// 15. Viết chương trình JavaScript để in ra một hình kim cương bằng dấu sao (*) bằng vòng lặp.


