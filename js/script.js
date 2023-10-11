//toggle navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      //active section for animation on scroll
      sec.classList.add("show-animate");
    }
    //if want to use animation that repeats on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });
  //sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
  // remove toggle icon and navbar when click navbar links(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// // Ambil referensi tombol "Let's Talk" dengan menggunakan ID atau selector lainnya
// const letsTalkButton = document.querySelector('.btn-lets-talk');

// // Tambahkan event listener untuk mendengarkan klik pada tombol
// letsTalkButton.addEventListener('click', function() {
//   // Implementasikan apa yang harus dilakukan saat tombol diklik di sini
//   alert('Terima kasih telah mengklik tombol "Let\'s Talk"');
//   // Anda dapat mengganti alert di atas dengan tindakan lain yang sesuai dengan kebutuhan Anda
// });

// Ambil referensi tombol "Download CV" dengan menggunakan ID atau selector lainnya
const downloadCvButton = document.querySelector(".btn-download-cv");

// Tambahkan event listener untuk mendengarkan klik pada tombol
downloadCvButton.addEventListener("click", function () {
  // Gantilah URL berikut dengan URL tempat Anda menyimpan CV untuk diunduh
  const cvUrl =
    "https://drive.google.com/file/d/172qrlMRetQTpGETXvYqcvbVqYYbvfR2f/view?usp=sharing";

  // Buka CV dalam tab atau jendela baru
  window.open(cvUrl, "_blank");
  // Atau Anda juga dapat mengarahkan pengguna untuk mengunduh CV dengan menggunakan metode ini:
  // window.location.href = cvUrl;

  // Anda dapat mengganti cvUrl dengan URL yang sesuai dengan CV Anda
});

// function Sample() {
//   var iRow;
//   var objExcel = new ActiveXObject("Excel.Application");
//   var objWorkbook = objExcel.Workbooks.Open("D:\\Mata Kuliah IT DEL\\Semester 5\\Pabwe\\Praktikum\\Website Portofolio\\form.xlsx");
//   objExcel.Application.Visible = true;
//   objWorkbook.Windows(1).Visible = true;
//   var XlSheet = objWorkbook.Sheets(1);
//   XlSheet.Activate();
//   iRow = 1;

//   // Mencari baris terakhir dengan data
//   while (XlSheet.Cells(iRow, 1).Value !== "") {
//       iRow = iRow + 1;
//   }

//   // Mengambil nilai dari input formulir HTML
//   var fname = document.querySelector('input[name="fullname"]').value;
//   var email = document.querySelector('input[name="mobile"]').value;
//   var mobile = document.querySelector('input[name="email"]').value;
//   var subject = document.querySelector('input[name="subject"]').value;
//   var message = document.querySelector('textarea[name="message"]').value;

//   // Menambahkan data ke file Excel
//   XlSheet.Cells(iRow, 1).Value = fname;
//   XlSheet.Cells(iRow, 2).Value = email;
//   XlSheet.Cells(iRow, 3).Value = mobile;
//   XlSheet.Cells(iRow, 4).Value = subject;
//   XlSheet.Cells(iRow, 5).Value = message;

//   // Menampilkan pesan sukses
//   alert("Data Added Successfully");

//   // Mengosongkan input formulir HTML
//   document.querySelector('input[name="fullname"]').value = "";
//   document.querySelector('input[name="mobile"]').value = "";
//   document.querySelector('input[name="email"]').value = "";
//   document.querySelector('input[name="subject"]').value = "";
//   document.querySelector('textarea[name="message"]').value = "";

//   // Menyimpan dan menutup file Excel
//   objWorkbook.Save();
//   objWorkbook.Close();
//   objWorkbook = null;
//   objExcel = null;
// }
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var fname = document.querySelector('input[name="fullname"]').value;
    var mobile = document.querySelector('input[name="mobile"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    if (fname.trim() === "") {
      alert("fullname masih kosong");
      return;
    }
  });
});
// function Sample() {
//     var fname = document.querySelector('input[name="fullname"]').value;
//     var mobile = document.querySelector('input[name="mobile"]').value;
//     var email = document.querySelector('input[name="email"]').value;
//     var subject = document.querySelector('input[name="subject"]').value;
//     var message = document.querySelector('textarea[name="message"]').value;

//     // Jika Anda ingin menampilkan data yang dikumpulkan di console
//     console.log("Full Name: " + fname);
//     console.log("Mobile: " + mobile);
//     console.log("Email: " + email);
//     console.log("Subject: " + subject);
//     console.log("Message: " + message);

//     // Anda bisa menambahkan kode di sini untuk menyimpan data ke file Excel
//     // Namun, ini akan menjadi tugas yang kompleks dan tidak praktis di sisi klien.
// }
