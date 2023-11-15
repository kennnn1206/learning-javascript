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


// const number = 232;
// const tailNumber = number % 10
// const headNumber = ((number - number % 100) / 100)
// if(tailNumber == headNumber){
//     console.log("so nguyen doi xung")
// }
// else {
//     console.log("so nguyen khong doi xung")
// }



// 2. Tạo một biến age và kiểm tra xem age có lớn hơn hoặc bằng 18 không. Nếu có, in ra "Bạn đã đủ tuổi"; ngược lại, in ra "Bạn chưa đủ tuổi".

// const age = 20
// if(age >= 18){
//     console.log("Bạn đã đủ tuổi")
// }
// else {
//     console.log("Bạn chưa đủ tuổi")
// }

// 4. Tạo một biến score và kiểm tra điểm số của học sinh theo hệ điểm 10. Nếu score lớn hơn hoặc bằng 5, in ra "Đậu"; ngược lại, in ra "Trượt".

// const score = 8
// if(score >= 5){
//     console.log("Đậu")
// }
// else {
//     console.log("Trượt")
// }

// 5. Viết chương trình JavaScript để kiểm tra xem một số nguyên có phải là số chẵn hay không. Nếu là số chẵn, in ra "Số chẵn"; ngược lại, in ra "Số lẻ".


// const a = 5
// if(a % 2 == 0 ){
//     console.log(a,"là số chẵn")
// }
// else {
//     console.log(a,"là số lẻ")
// }


// 11. Tạo một biến hour và kiểm tra xem hour có phải là giờ hợp lệ (0-23) không.

// const hour = 19
// if(0 <= hour && hour <= 23){
//     console.log("Giờ hợp lệ")
// }
// else {
//     console.log("Giờ không hợp lệ")
// }

// 10. Viết chương trình JavaScript để tính lãi suất đơn giản cho một số tiền gửi dựa trên số tiền, lãi suất và thời gian gửi.
//  Số tiền lãi = Số tiền gửi x lãi suất (%năm) x số ngày gửi/365


// const sotiengui = 5000000000
// const laisuat = 5.3
// const songaygui = 365 
// console.log(sotiengui * (5.3/100) * (365/365))

//13. Tạo một biến word và kiểm tra xem word có phải là từ viết tắt (ví dụ: "ASAP", "LOL") không.

// const lienminhhuyenthoai = "LOL"
// const word = "LOL"
// if (word === lienminhhuyenthoai){
//     console.log(word,"là từ viết tắt")
// }
// else {
//     console.log(word,"không là từ viết tắt")
// }
