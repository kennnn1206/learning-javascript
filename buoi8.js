// Quản lý Thư viện sách
// Tạo một đối tượng sách với thông tin (tên sách, tác giả, số lượng, vị trí,...).
// Sử dụng mảng để lưu trữ danh sách sách và thực hiện chức năng thêm, xóa, cập nhật sách trong thư viện.

// const thuvien = [{
//     namebook : "Doremon",
//     author : "Mạnh",
//     quantity : 10,
//     location : "giá 1",
// },
// {
//     namebook : "Conan",
//     author : "Dũng",
//     quantity : 5,
//     location : "giá 3",
// },
// {
//     namebook : "Phiêu lưu ký",
//     author : "Đạt",
//     quantity : 8,
//     location : "giá 2",
// },
// {
//     namebook : "Truyện cười",
//     author : "Minh",
//     quantity : 20,
//     location : "giá 4",
// },
// ]

// function themsach(namebook, author, quantity, location) {
//     let sachmoi = {
//         namebook: namebook,
//         author: author,
//         quantity: quantity,
//         location: location,
//     };
//     thuvien.push(sachmoi);
//     return thuvien
// }
// console.log(themsach("Pokemon","Minh",30,"giá 10"));

// const removebook = thuvien.filter((element) => element.quantity !== 8)
// console.log(removebook)

// function updatecount(namebook,author,quantity,location){
//         const bookupdate=thuvien.find(thuvien => thuvien.namebook ===namebook)
//         if (bookupdate){
//             bookupdate.namebook=namebook
//             bookupdate.author=author
//             bookupdate.quantity=quantity
//             bookupdate.location=location
//         }
//         else{
//             console.log("Sách không tồn tại")
//         }
//         return thuvien
//     }
//     console.log(updatecount("Truyện cười","Minh",15,"giá 7"))


// Quản lý Tài khoản Ngân hàng
// Tạo đối tượng tài khoản ngân hàng với các thông tin (số tài khoản, tên chủ tài khoản, số dư, lịch sử giao dịch,...).
// Sử dụng mảng và object để quản lý danh sách tài khoản, thực hiện chức năng chuyển khoản, rút tiền và hiển thị lịch sử giao dịch.

// const tkobject = [{
//     accountnumber : 3453435030,
//     name : "Mạnh",
//     surplus : 50000000,
//     deliveryhistory : "7/12/2023",
// },
// {
//     accountnumber : 5903593026,
//     name : "Đạt",
//     surplus : 58570000,
//     deliveryhistory : "1/12/2023",
// },
// {
//     accountnumber : 7985724934,
//     name : "Dũng",
//     surplus : 100000000,
//     deliveryhistory : "5/12/2023",
// },
// {
//     accountnumber : 9124833595,
//     name : "Hành",
//     surplus : 56789000,
//     deliveryhistory : "4/12/2023",
// },
// ]




// Quản lý Khách hàng
// Tạo đối tượng khách hàng với thông tin (tên, email, số điện thoại, địa chỉ,...).
// Sử dụng mảng và object để quản lý danh sách khách hàng, thực hiện chức năng thêm, xóa, sửa thông tin khách hàng và tìm kiếm theo tiêu chí.


// const khachhang = [{
//     name : "Dũng",
//     email : "pddung2902@gmail.com",
//     phone : 5937242498,
//     adress : "Cầu Giấy",
// },
// {
//     name : "Đạt",
//     email : "nvdat2004@gmail.com",
//     phone : 5439530586,
//     adress : "Long Biên",
// },
// {
//     name : "Mạnh",
//     email : "ntm2004@gmail.com",
//     phone : 6830585039,
//     adress : "Đông Anh",
// },
// {
//     name : "Hà Anh",
//     email : "phanh2004@gmail.com",
//     phone : 6830545308,
//     adress : "Thanh Xuân",
// },
// ]

// function themkhachhang(name, email,phone,adress) {
//     let khachhangmoi = {
//         name: name,
//         email: email,
//         phone: phone,
//         adress: adress,
//     };
//     khachhang.push(khachhangmoi);
//     return khachhang
// }
// console.log(themkhachhang("Minh","minh2004@gmail.com",6395853596,"Tay Ho"));

// const removekhachhang = khachhang.filter((element) => element.adress !== "Thanh Xuân")
// console.log(removekhachhang)

// function updatekhachhang(name,email,phone,adress){
//         const khachhangupdate=khachhang.find(khachhang => khachhang.name === name)
//         if (khachhangupdate){
//             khachhangupdate.name=name
//             khachhangupdate.email=email
//             khachhangupdate.phone=phone
//             khachhangupdate.adress=adress
//         }
//         else{
//             console.log("Khách hàng không tồn tại")
//         }
//         return khachhang
//     }
//     console.log(updatekhachhang("Mạnh","ntm222@gmail.com",6830585039,"Hà Nội"))

// const timkiemkhachhang = khachhang.filter((element) => element.phone === 5439530586)
// console.log(timkiemkhachhang)


// Quản lý Hội viên phòng tập gym
// Tạo đối tượng hội viên với thông tin (tên, tuổi, địa chỉ, gói tập, ngày gia nhập,...).
// Sử dụng mảng và object để quản lý danh sách hội viên, thực hiện chức năng thêm, xóa, sửa thông tin hội viên và tính tổng doanh thu từ gói t

const danhsachhoivien = [{
    name : "Đạt",
    age : 18,
    adress : "Long Biên",
    goitap : 1000000,
    date : "12/10/2022",
},{
    name : "Mạnh",
    age : 20,
    adress : "Đông Anh",
    goitap : 500000,
    date : "3/12/2022",
},
{
    name : "Tuấn Anh",
    age : 22,
    adress : "Phúc Thọ",
    goitap : 300000,
    date : "19/10/2023",
},
{
    name : "Dũng",
    age : 25,
    adress : "Cầu Giấy",
    goitap : 2000000,
    date : "10/12/2023",
},
]
// function themHoiVien(ten, tuoi, diaChi, goiTap, ngayGiaNhap) {
//     let hoiVienMoi = {
//         ten: ten,
//         tuoi: tuoi,
//         diaChi: diaChi,
//         goiTap: goiTap,
//         ngayGiaNhap: ngayGiaNhap,
//     };
//     danhsachhoivien.push(hoiVienMoi);
//     return danhsachhoivien
// }
// console.log(themHoiVien("Minh",17,"Ha Noi",400000,"05/10/2023"));

// const removehoivien = danhsachhoivien.filter((element) => element.age !== 25)
// console.log(removehoivien)

// function updatehoivien(name,age,adress,goitap,date){
//             const hoivienupdate=danhsachhoivien.find(danhsachhoivien=> danhsachhoivien.name === name)
//             if (hoivienupdate){
//                 hoivienupdate.name = name 
//                 hoivienupdate.age = age 
//                 hoivienupdate.adress = adress 
//                 hoivienupdate.goitap = goitap 
//                 hoivienupdate.date = date 
//             }
//             else{
//                 console.log("Hội viên không tồn tại")
//             }
//             return danhsachhoivien
//         }
//         console.log(updatehoivien("Mạnh",24,"Hà Nội",700000,"3/12/2022"))

// function tinhtongdoanhthu () {
//     let  tongdoanhthu = 0;
//     danhsachhoivien.forEach((Element) => {
//         tongdoanhthu += Element.goitap
//     })
//     return tongdoanhthu
// }
// console.log(tinhtongdoanhthu(danhsachhoivien))