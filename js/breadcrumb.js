/* Header Bread Crumb */

const html = document.querySelector('html');
const BreadCrumb = document.querySelector('.bread');
const BreadCrumbTextBoxs = document.querySelectorAll('.bread li');
const BreadCrumbTexts = document.querySelectorAll('.bread a');
const banner = document.querySelector('.banner_container');
const product = document.querySelector('.product');
const topic = document.querySelector('.topic');
const searchZone = document.querySelector('.search_zone');
const recent = document.querySelector('.recent_searched');
const newsletter = document.querySelector('.newsletter');
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');

const bannerH =  Math.floor(window.pageYOffset + banner.getBoundingClientRect().top);
const productH = Math.floor(window.pageYOffset + product.getBoundingClientRect().top);
const topicH = Math.floor(window.pageYOffset + topic.getBoundingClientRect().top);
const searchZoneH = Math.floor(window.pageYOffset + searchZone.getBoundingClientRect().top);
const recentH = Math.floor(window.pageYOffset + recent.getBoundingClientRect().top);
const newsletterH = Math.floor(window.pageYOffset + newsletter.getBoundingClientRect().top);
const contactH = Math.floor(window.pageYOffset + contact.getBoundingClientRect().top);
const footerH = Math.floor(window.pageYOffset + footer.getBoundingClientRect().top);

window.addEventListener('scroll', () => {
  let hrmlScroll = html.scrollTop;
  
  // activer 초기화 함수
  function resetActive() {
    BreadCrumbTexts.forEach(BreadCrumbText => {
      BreadCrumbText.classList.remove('active')
    });
  }

  // display 초기화 함수
  function resetDisplay() {
    BreadCrumbTextBoxs.forEach(BreadCrumbTextBox => {
      BreadCrumbTextBox.classList.remove('display');
    });
  }

  // 스크롤하여 해당 섹션 영역에 진입하면, 브레드크럼이 나타나 현재 위치를 표시합니다.
  if(bannerH < hrmlScroll && productH > hrmlScroll) {
    BreadCrumb.classList.remove('visible');
    resetActive();
    resetDisplay();
    BreadCrumbTexts[0].classList.add('active');
    BreadCrumbTextBoxs[0].classList.add('display');
  }
  if(productH < hrmlScroll && topicH > hrmlScroll) {
    BreadCrumb.classList.add('visible','active');
    resetActive();
    resetDisplay();
    BreadCrumbTexts[1].classList.add('active');
    BreadCrumbTextBoxs[1].classList.add('display');
  }
  if(topicH < hrmlScroll && searchZoneH > hrmlScroll) {
    resetActive();
    resetDisplay();
    BreadCrumbTexts[2].classList.add('active');
    BreadCrumbTextBoxs[2].classList.add('display');
  }
  if(searchZoneH < hrmlScroll && recentH > hrmlScroll) {
    resetActive();
    resetDisplay();
    BreadCrumbTexts[3].classList.add('active');
    BreadCrumbTextBoxs[3].classList.add('display');
  }
  if(recentH < hrmlScroll && newsletterH > hrmlScroll) {
    resetActive();
    resetDisplay();
    BreadCrumbTexts[4].classList.add('active');
    BreadCrumbTextBoxs[4].classList.add('display');
  }
  if(newsletterH < hrmlScroll && (contactH - 500) > hrmlScroll) {
    resetActive();
    resetDisplay();
    BreadCrumbTexts[5].classList.add('active');
    BreadCrumbTextBoxs[5].classList.add('display');
  }
  if((contactH - 500) < hrmlScroll) {
    resetActive();
    resetDisplay();
    BreadCrumbTexts[6].classList.add('active');
    BreadCrumbTextBoxs[6].classList.add('display');
  }
});

BreadCrumb.addEventListener('mouseleave', () => {
  BreadCrumbTextBoxs.forEach(BreadCrumbTextBox => {
    BreadCrumbTextBox.classList.remove('display');
  });
});

BreadCrumb.addEventListener('mouseenter', () => {
  BreadCrumbTextBoxs.forEach(BreadCrumbTextBox => {
    BreadCrumbTextBox.classList.add('display');
  });
});

// 클릭하여 해당 섹션 영역으로 이동하면, 현재 위치를 표시합니다.
BreadCrumb.addEventListener('click', (event) => {
  BreadCrumbTexts.forEach(BreadCrumbText => {
    BreadCrumbText.classList.remove('active')
  });
  let targetEl = event.target;
  targetEl.classList.add('active');
  targetEl.parentNode.classList.add('display');
});
