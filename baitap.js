// Viết chương trình JavaScript để kiểm tra xem một số nguyên là dương, âm hay bằng 0 và in ra kết quả.

// const checkNumber = 20;
// if(checkNumber > 0){
//     console.log("bien duong")
// }
// else if(checkNumber < 0){
//     console.log("bien am")
// }
// else {
//     console.log("bien bang 0")
// }

// Viết chương trình JavaScript để kiểm tra xem một chuỗi có độ dài lớn hơn 5 ký tự không. Nếu có, in ra "Chuỗi quá dài"; ngược lại, in ra "Chuỗi đủ ngắn".

// const chuoikytu = "Java"
// const dodaichuoi = chuoikytu.length;
// if(dodaichuoi > 5){
//     console.log("do dai chuoi bang:",dodaichuoi,", chuoi qua dai")
// }else {
//     console.log("do dai chuoi bang:",dodaichuoi,", chuoi du ngan")
// }

// Tạo một biến year và kiểm tra xem year có phải là năm nhuận không. In ra thông báo tương ứng.

// const year = 2000;
// if((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0 ){
//     console.log("nam",year,"la nam nhuan")
// }else{
//     console.log("nam",year,"nam khong nhuan")
// }

// Tạo một biến day và kiểm tra xem day có phải là một ngày hợp lệ trong tháng (ví dụ: ngày 1-31) không.

// const day = 32;
// if(day >= 1 && day <= 31){
//     console.log("ngay",day,"la ngay hop le ")
// }else{
//     console.log("ngay",day,"la ngay khong hop le ")
// }

//Viết chương trình JavaScript để tìm số lớn nhất trong ba số nguyên a, b và c.

// const a = 2;
// const b = 4;
// const c = 8;
// if(a>b && a>c){
//     console.log("a max")
// }
// else if(b>a && b>c){
//     console.log("b max")
// }
// else{
//     console.log("c max")
// }

//Viết chương trình JavaScript để kiểm tra xem một số nguyên có phải là số Palindrome (số đối xứng) hay không.


const number = 232;
const tailNumber = number %100
const headNumber = ((number - number % 100) / 100)
if(tailNumber === headNumber){
    console.log("so nguyen doi xung")
}
else {
    console.log("so nguyen khong doi xung")
}
