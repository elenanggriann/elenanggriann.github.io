//menambahkan sidemenu
function openmenu() {
    // Memeriksa lebar layar sebelum membuka menu
    if (window.innerWidth <= 576) {
        sidemenu.style.right = "0";
    }
}
function closemenu() {
    // Memeriksa lebar layar sebelum menutup menu
    if (window.innerWidth <= 576) {
        sidemenu.style.right = "-60vw";
    }
}

//button switch
function switchFrequency(frequency) {
    if (frequency === 'monthly') {
        document.getElementById('monthlybtn').classList.add('btn-switch--active');
        document.getElementById('anuallybtn').classList.remove('btn-switch--active');
        // Lakukan tindakan untuk opsi bulanan
    } else if (frequency === 'anually') {
        document.getElementById('anuallybtn').classList.add('btn-switch--active');
        document.getElementById('monthlybtn').classList.remove('btn-switch--active');
        // Lakukan tindakan untuk opsi tahunan
    }
}

//animation
