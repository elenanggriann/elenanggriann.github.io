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

//animation section pricing and extension
/*
let sections = document.querySelectorAll('section');
const left = document.querySelector('.about__img');
const right = document.querySelector('.about__text');

const down1 = document.querySelector('.pricing__heading');
const down2 = document.querySelector('.pricing__switch');
const down3 = document.querySelector('.pricing__card');

// Menetapkan opacity 0 pada awalnya
left.style.opacity = '0';
right.style.opacity = '0';

down1.style.opacity = '0';
down2.style.opacity = '0';
down3.style.opacity = '0';

window.onscroll = () =>  {
sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 600;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            section.classList.add('show-animate');
            left.style.opacity = '1';
            right.style.opacity = '1';
            
            down1.style.opacity = '1';
            down2.style.opacity = '1';
            down3.style.opacity = '1';
        
            left.classList.add('animated-left');
            right.classList.add('animated-right');

            down1.classList.add('animated-down1');
            down2.classList.add('animated-down2');
            down3.classList.add('animated-down3');
        }
    })
}*/

let sections = document.querySelectorAll('section');
const left = document.querySelector('.about__img');
const right = document.querySelector('.about__text');

const cta = document.querySelector('.section-extension');

const down1 = document.querySelector('.down1');
const down2 = document.querySelector('.down2');
const down3 = document.querySelector('.down3');

// Set initial opacity to 0
left.style.opacity = '0';
right.style.opacity = '0';

down1.style.opacity = '0';
down2.style.opacity = '0';
down3.style.opacity = '0';

cta.style.opacity='0';

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;

        if (top >= offset - 600 && top < offset + height - 600) {
            section.classList.add('show-animate');
            if (section.classList.contains('section-about')) {
                left.style.opacity = '1';
                right.style.opacity = '1';

                left.classList.add('animated-left');
                right.classList.add('animated-right');

            } else if (section.classList.contains('section-pricing')) {
                down1.style.opacity = '1';
                down2.style.opacity = '1';
                down3.style.opacity = '1';

                down1.classList.add('animated-down1');
                down2.classList.add('animated-down2');
                down3.classList.add('animated-down3');

            } else if (section.classList.contains('section-extension')) {
                cta.style.opacity='1';
                section.querySelector('.heading-4').classList.add('animated-down1');
                section.querySelector('.heading-2').classList.add('animated-down1');
                section.querySelector('.paragraph').classList.add('animated-down2');
                section.querySelector('button').classList.add('animated-down2');
            }
        }
    });
});