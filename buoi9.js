let listName = [{
    id: 1,
    name: "Huynh",
    addressKrey: 4,
    phoneKrey : 4,
    tieuchisKrey: 1,
    emailKrey : 1,
    descriptionKrey : 6,
}, {
    id: 2,
    name: "Dũng",
    addressKrey: 2,
    phoneKrey : 6,
    tieuchisKrey: 5,
    emailKrey : 3,
    descriptionKrey : 5,
}, {
    id: 3,
    name: "Đạt",
    addressKrey: 3,
    phoneKrey : 1,
    tieuchisKrey: 2,
    emailKrey : 2,
    descriptionKrey : 4,
},
{
    id: 4,
    name: "Hà Anh",
    addressKrey: 5,
    phoneKrey : 2,
    tieuchisKrey: 4,
    emailKrey : 4,
    descriptionKrey : 1,
},
{
    id: 5,
    name: "Tuấn Anh",
    addressKrey: 6,
    phoneKrey : 3,
    tieuchisKrey: 2,
    emailKrey : 5,
    descriptionKrey : 2,
},
{
    id: 6,
    name: "Mạnh",
    addressKrey: 1,
    phoneKrey : 5,
    tieuchisKrey: 3,
    emailKrey : 3,
    descriptionKrey : 4,
},
]

let address = [{
    name: "Hà Nội",
    id: 1
}, {
    name: "Hồ Chí Minh",
    id: 2
},
{
    name: "Đà Lạt",
    id: 3
},
{
    name: "Nha Trang",
    id: 4
},
{
    name: "Đà Nẵng",
    id: 5
},
{
    name: "Thanh Hóa",
    id: 6
},
]

let tieuchis = [
    {
        name: "Nhà",
        id: 1
    }, {
        name: "Xe",
        id: 2
    },
    {
        name: "Ca nhạc",
        id: 3
    },
    {
        name: "Nhạc cụ",
        id: 4
    },
    {
        name: "Manga",
        id: 5
    },
    {
        name: "Game",
        id: 6
    }
]
let email = [
    {
        name: "huynh@gmail.com",
        id: 1
    }, {
        name: "dat@gmail.com",
        id: 2
    },
    {
        name: "manh@gmail.com",
        id: 3
    },
    {
        name: "hanh@gmail.com",
        id: 4
    },
    {
        name: "tanh@gmail.com",
        id: 5
    },
    {
        name: "dung@gmail.com",
        id: 6
    }
]
let phone = [
    {
        name: 7574646464,
        id: 1
    }, {
        name: 8686895463,
        id: 2
    },
    {
        name: 4241165858,
        id: 3
    },
    {
        name: 1234567890,
        id: 4
    },
    {
        name: 9730242948,
        id: 5
    },
    {
        name: 2419503853,
        id: 6
    }
]

let description = [
    {
        name: "Hay ăn vặt, thích mua đồ ăn vặt, đặc biêt là đồ ngọt",
        id: 1
    }, {
        name: "THích mua đồ ăn",
        id: 2
    },
    {
        name: "Trông có vẻ lừa đảo, hay đến quán, hỏi chuyện khách nhưng không mua, đa cấp",
        id: 3
    },
    {
        name: "hay mua mua sách 18+",
        id: 4
    },
    {
        name: "Thích mua, hay đến hỏi xe nhưng chưa thấy mua",
        id: 5
    },
    {
        name: "Thích mua đồ rẻ",
        id: 6
    }
]
// const getInfomationById = (id) => {
//     let findMember = listName.find(element => element.id === id)
//     if(!findMember) {
//         console.log("Không tìm thấy member")
//         return
//     }
//     const addressByFindMember = address.find(element => element.id === findMember.addressKrey)
//     const tieuChiByFindMember = tieuchis.find(element => element.id === findMember.tieuchisKrey)
//     const descriptionByFindMember = description.find(element => element.id === findMember.descriptionKrey)
//     return {
//         name: findMember.name,
//         address: addressByFindMember.name,
//         tieuchis: tieuChiByFindMember.name,
//         description: descriptionByFindMember.name
//     }
// }
// console.log(getInfomationById(5))


