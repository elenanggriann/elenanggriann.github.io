
//menambahkan sidebar
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-300px";
}

//carousel
let currentIndex = 0;
  const slides = document.querySelectorAll('.review-card');
  const contentReview = document.querySelector('.content-review');

  function showSlide(index) {
    currentIndex = index;
    const translateValue = -index * 20 + '%';
    contentReview.style.transform = `translateX(${translateValue})`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Drag functionality
  let isDragging = false;
  let startPosX = 0;
  let currentTranslate = 0;

  contentReview.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosX = e.clientX;
    currentTranslate = currentIndex * -100;
  });

  contentReview.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const dragDistance = e.clientX - startPosX;
    contentReview.style.transform = `translateX(${currentTranslate + dragDistance}px)`;
  });

  contentReview.addEventListener('mouseup', () => {
    isDragging = false;
    const dragDistance = startPosX - e.clientX;

    if (dragDistance > 50) {
      nextSlide();
    } else if (dragDistance < -50) {
      prevSlide();
    } else {
      showSlide(currentIndex);
    }
  });

  contentReview.addEventListener('mouseleave', () => {
    if (isDragging) {
      showSlide(currentIndex);
      isDragging = false;
    }
  });
  showSlide(-2);


