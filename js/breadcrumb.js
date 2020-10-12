/* Header Bread Crumb */

const html = document.querySelector('html');
const BreadCrumb = document.querySelector('.bread');
const BreadCrumbTexts = document.querySelectorAll('.bread a');
const banner = document.querySelector('.banner_container');
const product = document.querySelector('.product');
const topic = document.querySelector('.topic');
const searchZone = document.querySelector('.search_zone');
const recent = document.querySelector('.recent_searched');
const newsletter = document.querySelector('.newsletter');
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  let hrmlScroll = html.scrollTop;
  const bannerH =  Math.floor(window.pageYOffset + banner.getBoundingClientRect().top);
  const productH = Math.floor(window.pageYOffset + product.getBoundingClientRect().top);
  const topicH = Math.floor(window.pageYOffset + topic.getBoundingClientRect().top);
  const searchZoneH = Math.floor(window.pageYOffset + searchZone.getBoundingClientRect().top);
  const recentH = Math.floor(window.pageYOffset + recent.getBoundingClientRect().top);
  const newsletterH = Math.floor(window.pageYOffset + newsletter.getBoundingClientRect().top);
  const contactH = Math.floor(window.pageYOffset + contact.getBoundingClientRect().top);
  const footerH = Math.floor(window.pageYOffset + footer.getBoundingClientRect().top);
  
  // activer 초기화 함수
  function resetActive() {
    BreadCrumbTexts.forEach(BreadCrumbText => {
      BreadCrumbText.classList.remove('active')
    });
  }

  // 스크롤하여 해당 섹션 영역에 진입하면, 브레드크럼이 나타나 현재 위치를 표시합니다.
  if(bannerH < hrmlScroll && productH > hrmlScroll) {
    BreadCrumb.classList.remove('visible');
    resetActive();
    BreadCrumbTexts[0].classList.add('active');
  }
  if(productH < hrmlScroll && topicH > hrmlScroll) {
    BreadCrumb.classList.add('visible','active');
    resetActive();
    BreadCrumbTexts[1].classList.add('active');
  }
  if(topicH < hrmlScroll && searchZoneH > hrmlScroll) {
    resetActive();
    BreadCrumbTexts[2].classList.add('active');
  }
  if(searchZoneH < hrmlScroll && recentH > hrmlScroll) {
    resetActive();
    BreadCrumbTexts[3].classList.add('active');
  }
  if(recentH < hrmlScroll && newsletterH > hrmlScroll) {
    resetActive();
    BreadCrumbTexts[4].classList.add('active');
  }
  if(newsletterH < hrmlScroll && (contactH - 500) > hrmlScroll) {
    resetActive();
    BreadCrumbTexts[5].classList.add('active');
  }
  if((contactH - 500) < hrmlScroll && footerH > hrmlScroll) {
    resetActive();
    BreadCrumbTexts[6].classList.add('active');
  }
});

// 클릭하여 해당 섹션 영역으로 이동하면, 현재 위치를 표시합니다.
BreadCrumb.addEventListener('click', (event) => {
  BreadCrumbTexts.forEach(BreadCrumbText => {
    BreadCrumbText.classList.remove('active')
  });
  let targetEl = event.target;
  targetEl.classList.add('active');
  
});