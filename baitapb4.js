//1. Tạo một mảng chứa danh sách các môn học yêu thích của bạn và in chúng ra, in ra môn yêu thích nhất.
// const favoriteArray = [
//     {
//         name:"Math",
//         favorite: 10,
//     },
//     {
//         name: "music",
//         favorite: 9,
//     },
//     {
//         name:"physical",
//         favorite: 4,
//     },
//     {
//         name:"IT",
//         favorite: 11,
//     }
// ]
// // console.log(favoriteArray[3].favorite)

// let facoriteMax = -Infinity;
// let name = ""

// for(let i =0;i<favoriteArray.length;i++){
//     if(favoriteArray[i].favorite > facoriteMax){
//         facoriteMax = favoriteArray[i].favorite
//         name = favoriteArray[i].name
//     }
// }

// console.log(name)

// 3. Tạo một đối tượng person với các thuộc tính như tên, tuổi và địa chỉ, sau đó in ra chúng.
// const arrPerson = [
//     {
//         lastName: "Mạnh",
//         firstName:"Ngyễn",
//         mideName: "Thế",
//         age: 10,
//         address:"Đông Anh - Hà Nội",
//         girlFriendName: "Phượng",
//     },
//     {
//         lastName: "Dũng",
//         firstName:"Phan",
//         mideName: "Đăng",
//         age: 5,
//         address: "Cầu giấy - Hà Nội",
//         girlFriendName: null,
//     },{
//         lastName: "Đạt",
//         firstName:"NGuyễn",
//         mideName: "Văn",
//         age: 9,
//         address:"Long Biên - Hà Nội",
//         girlFriendName: null,
//     }
// ]

// for (let i=0;i<arrPerson.length;i++){
//     if(arrPerson[i].girlFriendName !== null){
//         console.log(arrPerson[i].firstName, arrPerson[i].mideName , arrPerson[i].lastName)
//     }
// }

// 10. Tạo một mảng chứa danh sách sản phẩm với mỗi sản phẩm có tên, giá và số lượng trong kho, sau đó tính tổng giá trị của các sản phẩm.
// const arrProduct = [{
//     name: "Kem đánh răng",
//     price: 15000,
//     count: 1000,
// }

// , {
//     name: "Thuốc diệt chuột",
//     price: 30000,
//     count: 50,
// }, {
//     name: "Bàn chải",
//     price: 5000,
//     count: 60,
// }, {
//     name: "Nước giặt",
//     price: 100000,
//     count: 200,
// },
// {
//     name: "Nước Xả",
//     price: 60000,
//     count: 100,
// }]

// let USDollar = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
// });

// let sum = 0;
// for(let i=0;i<arrProduct.length;i++){
//     let kdr =  arrProduct[i].price * arrProduct[i].count;
//     sum += kdr
// }
// console.log("Tổng tiền trong kho = ", USDollar.format(sum));

// 12. Tạo một đối tượng student với các thuộc tính như tên, điểm và địa chỉ, sau đó tính điểm trung bình của học sinh đó.

// const student = {
//     name: "Tuấn Anh",
//     scores: [{
//         name: "Math",
//         score: 9,
//     }, {
//         name: "Hóa",
//         score: 4,
//     }, {
//         name: "Vật lý",
//         score: 3,
//     }, {
//         name: "Văn",
//         score: 2,
//     }, {
//         name: "Tiếng Anh",
//         score: 1,
//     }],
//     address: "Đông Anh - Hà Nội",
// }

// let sum = 0;
// for (let i = 0; i < student.scores.length; i++) {
//     sum += student.scores[i].score
// }
// let tb = sum / student.scores.length; // 7
// const checkScores = [{
//     minScoure: 9,
//     name: "Suất sắc"
// }, {
//     minScoure: 8,
//     name: "Giỏi"
// }, {
//     minScoure: 5,
//     name: "Trung bình"
// }, {
//     minScoure: 6.5,
//     name: "Khá"
// }]

// // let facoriteMax = -Infinity;
// // let name = ""

// // for(let i =0;i<favoriteArray.length;i++){
// //     if(favoriteArray[i].favorite > facoriteMax){
// //         facoriteMax = favoriteArray[i].favorite
// //         name = favoriteArray[i].name
// //     }
// // }
// // let max = -Infinity;
// // let hocLuc = "Yếu"
// // for (let i = 0; i < checkScores.length; i++) {
// //     if (max < checkScores[i].minScoure && checkScores[i].minScoure < tb ){
// //         max = checkScores[i].minScoure//10
// //         hocLuc = checkScores[i].name
// //     }
// // }
// // console.log(hocLuc);

// // 8. Tạo một đối tượng car với các thuộc tính như hãng xe, màu sắc và năm sản xuất, sau đó in ra chúng.
// const car = {
//     branch: "BMW",
//     birthDate: "2023",
//     objectCar: [{
//         color: "red",
//         price: 3000,
//         count: 85
//     }, {
//         color: "Black",
//         price: 3100,
//         count: 83
//     }, {
//         color: "gray",
//         price: 3200,
//         count: 60
//     }, {
//         color: "yellow",
//         price: 3300,
//         count: 83
//     }, {
//         color: "brown",
//         price: 2900,
//         count: 100
//     }],
// }
// // for => 6100 - 3400 => 
// // Dũng có 6100$ giúp dũng mua 2 chiêc xe

// let carName1 = ""

// let carName2 = ""

// let carOver = ""
// while (carName2 === "") {
//     let ca123 = ""
//     let carName1InWhite = ""
//     let max = -Infinity
//     let max2 = -Infinity
//     let maxPriceCar = 0
//     for (let i = 0; i < car.objectCar.length; i++) {
//         if (max < car.objectCar[i].price && car.objectCar[i].color !== carOver) {
//             maxPriceCar = car.objectCar[i].price
//             max = car.objectCar[i].price
//             carName1 = car.objectCar[i].color
//             carName1InWhite = car.objectCar[i].color
//         }
//     }
//     let tienThua = 6100 - maxPriceCar; //2800
//     for (let i = 0; i < car.objectCar.length; i++) {
//         if (max2 < car.objectCar[i].price && car.objectCar[i].price <= tienThua) {
//             max2 = car.objectCar[i].price
//             carName2 = car.objectCar[i].color
//             ca123 =  car.objectCar[i].color
//         }
//     }
//     if (ca123 === "") {
//         carOver = carName1InWhite
//     }
// }

// console.log(carName1);
// console.log(carName2);

// 5. Tạo một mảng chứa danh sách tên của bạn bè và in ra tên của bạn bè có độ dài dài hơn 5 ký tự.

// const arrfriend = [
//     {
//         name : "Mạnh"
//     },
//     {
//         name : "Tuấn Anh"
//     },
//     {
//         name : "Hà anh"
//     },
//     {
//         name : "Trường"
//     },
//     {
//         name : "Dũng"
//     },
//     {
//         name : "Đạt" 
//     },
// ]
// let newname = []
// for(let i=0;i<arrfriend.length;i++){
//      if(arrfriend[i].name.length > 5){
//         newname.push(arrfriend[i].name)
//      }
// }
// console.log(newname)
 
// 6. Tạo một mảng số nguyên và sắp xếp nó theo thứ tự tăng dần, sau đó in ra kết quả.

// const arr=[3,5,6,1,4,2,8,9,7]
    
// for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[i]){
//                 let tmp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = tmp;
//             }
//         }
//     }
//    console.log(arr)

// 7. Viết một chương trình JavaScript để sao chép một mảng thành một mảng mới mà không thay đổi mảng gốc.

// const arrnumber=[1,2,3,4,5]
// let newarr=[]
// let dem=0
// while(dem<arrnumber.length){
//     newarr[dem]=arrnumber[dem]
//     dem++
// }
// console.log(newarr)

// 9.Viết một hàm JavaScript để kiểm tra xem một mảng có chứa số nguyên âm hay không và trả về kết quả tương ứng.

// const number = [3,-5,6,1,-4,2,-8,-9,7]
// let dayso = []
// for(let i=0;i<number.length;i++){
//     if(number[i] < 0){
//        dayso.push(number[i]);
//     }
// }
// console.log(dayso)

// 11. Viết chương trình JavaScript để đảo ngược một chuỗi sử dụng mảng và vòng lặp.

// const kitu="Tuannn"
// let newarr=[]
// for(let i=kitu.length-1;i>=0;i--){
//     newarr+=kitu[i]
// }
// console.log(newarr)

// 14. Tạo một mảng số nguyên và loại bỏ các số lẻ khỏi mảng, sau đó in ra kết quả.

// const arrnumber = [1,2,3,4,5,6,7,8,9,10,13,12,15,14]
// let sochan = []
// for(let i=0;i<arrnumber.length;i++){
//     if(arrnumber[i] % 2 === 0){
//         sochan.push(arrnumber[i])
//     }
// }
// console.log(sochan)


// 15. Viết chương trình JavaScript để tạo một danh sách danh bạ (address book) bằng cách sử dụng đối tượng, mỗi người có tên, số điện thoại và địa chỉ, sau đó in ra danh bạ.

// const addressbook = [
//     {
//         name : "Dũng",
//         phonenumber : 0294228495,
//         address : "Hà Đông",
//     },
//     {
//         name : "Khánh",
//         phonenumber : 0935848535,
//         address : "Đông Anh",
//     },
//     {
//         name : "Đạt",
//         phonenumber : 0937428454,
//         address : "Long Biên",
//     },
//     {
//         name : "Dung",
//         phonenumber : 09,
//         address : "Phúc Thọ",
//     },
//     {
//         name : "Toàn",
//         phonenumber : 0453953598,
//         address : "Thị Trấn",
//     }
// ]

// console.log(addressbook)