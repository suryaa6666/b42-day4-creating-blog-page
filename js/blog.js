// let nama1 = "Frans Afriandi"
// let nama2 = "Surya Cantik Wibu"
// let nama3 = "Try Widodo Putra"

// console.log(nama1, nama2, nama3)

// Array
// var names = ["Frans Afriandi", "Rafi Alfian", "Dias Hafiz"]
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names.length)

// Object
// var dataSiswa1 = {
//     nama: "Frans",
//     umur: 17,
//     alamat: "jln. mars nomer 17"
// }

// var dataSiswa2 = {
//     nama: "Rian",
//     umur: 20,
//     alamat: "jln. kenangan"
// }

// var dataSiswa3 = {
//     nama: "samsul",
//     umur: 39,
//     alamat: "jln. depok"
// }

// var dataBanyak = {
//     siswa: {
//         nama: "surya",
//         umur: 99
//     }
// }

// console.log("umur saya yaitu", dataSiswa1["umur"])
// console.log(dataBanyak.siswa.nama, dataBanyak.siswa["umur"])
// console.log(dataSiswa1, dataSiswa2, dataSiswa3)

// Array of Object
// let dataAnakBootcamp = [
//     {
//         nama: "Khafiz",
//         batch: 42,
//         status: true // boolean, int : 1
//     },
//     {
//         nama: "Soleh",
//         batch: 1,
//         status: false // boolean, int : 0
//     },
//     {
//         nama: "Surya",
//         angkatan: 2022,
//         status: false
//     }
// ]

// console.log(dataAnakBootcamp)
// console.log(dataAnakBootcamp[2]["angkatan"])

// mainan function

// let data = []

// function addData() {
//     let person = {
//         name: "Surya",
//         address: "Jln. jalan"
//     }

//     data.push(person)
//     addData()
// }



// console.log(data)

let data = []

function addData(event) {

    event.preventDefault()

    let title = document.getElementById("input-blog-title").value;
    let content = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image").files;

    let gambar = URL.createObjectURL(image[0])

    console.log("gambar", image[0])
    console.log("gambar dengan path", gambar)

    let blog = {
        title,
        content,
        gambar,
        postAt: "17 November 2022",
        author: "Surya Gans"
    }

    data.push(blog)
    console.log(data)
    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ``
    for (let index = 0; index < data.length; index++) {
        document.getElementById("contents").innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data[index].gambar}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">${data[index].title}</a>
      </h1>
      <div class="detail-blog-content">
      ${data[index].postAt} | ${data[index].author}
      </div>
      <p>
      ${data[index].content}
      </p>
    </div>
  </div>`
    }
}




