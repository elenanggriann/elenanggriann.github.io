//menambahkan dan menyembunyikan open dan close menu
var sidemenu = document.getElementById("sidemenu");
var closes = document.getElementById("fa-solid-close");
var opens = document.getElementById("fa-solid-open");

function setMenuVisibility() {
    if (window.innerWidth > 1080) {
        opens.style.display = "none";
        closes.style.display = "none";
    } else {
        opens.style.display = "block";
        closes.style.display = "none";
    }
}

// Panggil fungsi setMenuVisibility() saat halaman dimuat
setMenuVisibility();

// Tambahkan event listener untuk memantau perubahan ukuran layar
window.addEventListener("resize", function() {
    setMenuVisibility();
});

//menambahkan sidebar
function openmenu() {
    // Memeriksa lebar layar sebelum membuka menu
    if (window.innerWidth <= 1080) {
        sidemenu.style.top = "0";
        opens.style.display = "none";
        closes.style.display = "block";
    } else {
        opens.style.display = "none";
        closes.style.display = "none";
    }
}

function closemenu() {
    // Memeriksa lebar layar sebelum menutup menu
    if (window.innerWidth <= 1080) {
        sidemenu.style.top = "-500px";
        opens.style.display = "block";
        closes.style.display = "none";
    } else {
        opens.style.display = "none";
        closes.style.display = "none";
    }
}

//GALERI
document.addEventListener("DOMContentLoaded", function () {
  var thumbnailItems = document.querySelectorAll('.thumbnail .item');
  var sliderItems = document.querySelectorAll('.list .item');
  var currentIndex = 0;

  //fungsi untuk update aktif item
  function updateActiveState() {
      thumbnailItems.forEach(function (item) {
          item.classList.remove('active');
      });

      sliderItems.forEach(function (item) {
          item.classList.remove('active');
      });

      thumbnailItems[currentIndex].classList.add('active');
      sliderItems[currentIndex].classList.add('active');
  }

  // eventlistener untuk next button
  document.getElementById('next').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % thumbnailItems.length;
      updateActiveState();
  });

    // eventlistener untuk next button
  document.getElementById('prev').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + thumbnailItems.length) % thumbnailItems.length;
      updateActiveState();
  });

  // eventlistener untuk thumbnail items
  thumbnailItems.forEach(function (thumbnailItem, index) {
      thumbnailItem.addEventListener('click', function () {
          currentIndex = index;
          updateActiveState();
      });
  });

  // untuk kondisi awal
  updateActiveState();
});

//BERITA

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
 for(tablink of tablinks){
     tablink.classList.remove("active-link");
 }
 for(tabcontent of tabcontents){
     tabcontent.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}