// 변수 지정
const sliderWrapper = document.querySelector('.banner_container'), // 슬라이드 전체 컨테이너
      sliderContainer = document.querySelector('.banner_rolling'), // 슬라이드 아이템 컨테이너
      btnPrev = document.querySelector('.banner_prev'), // 이전 버튼
      btnNext = document.querySelector('.banner_next'), // 다음 버튼
      pagerContainer = document.querySelector('.banner_pager');
      //pagerBtns = document.querySelectorAll('.banner_pager li'); // 페이지 네비게이션 버튼
let slides = document.querySelectorAll('.banner_item'), // 슬라이드 아이템
    slideCount = slides.length, // 슬라이드 갯수
    currentIndex = 0; // 현재 슬라이드
    timer = undefined,
    pagerHTML = '';

// 슬라이드 아이템의 높이를 확인하여 부모의 높이로 지정
let topHeight = slides[0].offsetHeight;
function calculateTallsetSlide() {
  for(let i = 0; i < slideCount; i++) {
    if(slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderContainer.style.height = topHeight + 'px';
  sliderWrapper.style.height = topHeight + 'px';
}
// calculateTallsetSlide(); // 계산해라. 제일 높은것을. 슬라이드의

// 슬라이드 가로로 배열 들어오는 갯수에 따라 가로로 붙도록 합니다.
// 슬라이드 갯수 만큼 페이지네이션 아이템이 자동 생성됩니다.
/* slides[0].style.left = ???? + '%' */
for(let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
  // pagerHTML = pagerHTML + <li>
  // 반복문을 돌때마다 li태그가 쌓여야합니다.
  // pagerHTML = pagerHTML + `<li data-index="${i}">${i + 1}</li>`;
  pagerHTML += `<li data-index="${i}">${i + 1}</li>`;
  pagerContainer.innerHTML = pagerHTML;
  // li를 만들어라. 페이저컨테이너에 태그를 넣어라
  // 기존걸 무시하고 슬라이드카운터까지 요소 1개 생성
}
let pagerBtns = document.querySelectorAll('.banner_pager li');

// 슬라이드 이동 함수
function goToSlide(idx) {
  sliderContainer.classList.add('animated');
  sliderContainer.style.left = `${idx * -100}%`;
  currentIndex = idx;

  pagerBtns.forEach(pagerBtn => {
    pagerBtn.classList.remove('active');
  });
  pagerBtns[idx].classList.add('active');
}
goToSlide(0);

// 버튼을 클릭시 슬라이드 이동
btnPrev.addEventListener('click', () => {
  if(currentIndex != 0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(slideCount - 1);
  }
});
btnNext.addEventListener('click', () => {
  if(currentIndex < slideCount - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
});

// 버튼 기능 업데이트 함수
function updateNav() {
  if(currentIndex == 0) {
    btnPrev.classList.add('disabled');
  }else {
    btnPrev.classList.remove('disabled');
  }
  if(currentIndex == slideCount - 1) {
    btnNext.classList.add('disabled');
  }else {
    btnNext.classList.remove('disabled');
  }
}

// 자동 슬라이드
function startAutoSlide() {
  timer = setInterval(() => {
    let nextIndex = (currentIndex + 1) % slideCount;
    goToSlide(nextIndex);
  }, 3000);
}
startAutoSlide();

sliderWrapper.addEventListener('mouseenter', () => {
  clearInterval(timer);
});
sliderWrapper.addEventListener('mouseleave', () => {
  startAutoSlide();
});

pagerBtns.forEach(pagerBtn => {
  pagerBtn.addEventListener('click', (event) => {
    let pagerNum = event.target.dataset.index;
    goToSlide(pagerNum);
  });
});

