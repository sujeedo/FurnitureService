/* Recent Searched Slide*/
// 화살표 버튼을 클릭하면 현재 showing 클래스가 있는 요소의 형제 요소에 showing 클래스를 이동시킵니다.
const classShowing = 'showing';
const firstSlide = document.querySelector('.slider_cards:first-child');
const lastSlide = document.querySelector('.slider_cards:last-child');
const prevBtn = document.querySelector('.btn_prev');
const nextBtn = document.querySelector('.btn_next');
function nextSlide() {
  const currentSlide = document.querySelector(`.${classShowing}`);
  if(currentSlide) {
    currentSlide.classList.remove(classShowing);
    const nexstSlide = currentSlide.nextElementSibling;
    if(nexstSlide) {
      nexstSlide.classList.add(classShowing);
    }
    else {
      firstSlide.classList.add(classShowing);
    }
  }
  else {
    firstSlide.classList.add(classShowing);
  }
}
function prevSlide() {
  const currentSlide = document.querySelector(`.${classShowing}`);
  if(currentSlide) {
    currentSlide.classList.remove(classShowing);
    const nexstSlide = currentSlide.previousElementSibling;
    if(nexstSlide) {
      nexstSlide.classList.add(classShowing);
    }
    else {
      lastSlide.classList.add(classShowing);
    }
  }
  else {
    firstSlide.classList.add(classShowing);
  }
}
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
