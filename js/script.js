//toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      //active navbar
      navLinks.forEach(links => {
        links.classList.remove('active');
         document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      //active section for animation on scroll
      sec.classList.add('show-animate')
    }
    //if want to use animation that repeats on scroll use this
    else{
      sec.classList.remove('show-animate');
    }
  });
  //sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
  // remove toggle icon and navbar when click navbar links(scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  
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
const downloadCvButton = document.querySelector('.btn-download-cv');

// Tambahkan event listener untuk mendengarkan klik pada tombol
downloadCvButton.addEventListener('click', function() {
  // Gantilah URL berikut dengan URL tempat Anda menyimpan CV untuk diunduh
  const cvUrl = 'https://drive.google.com/file/d/172qrlMRetQTpGETXvYqcvbVqYYbvfR2f/view?usp=sharing';

  // Buka CV dalam tab atau jendela baru
  window.open(cvUrl, '_blank');
  // Atau Anda juga dapat mengarahkan pengguna untuk mengunduh CV dengan menggunakan metode ini:
  // window.location.href = cvUrl;

  // Anda dapat mengganti cvUrl dengan URL yang sesuai dengan CV Anda
});
