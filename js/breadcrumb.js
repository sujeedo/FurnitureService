/* Header Bread Crumb */

const html = document.querySelector('html');
const body = document.querySelector('body');
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
  // function resetDisplay() {
  //   BreadCrumbTextBoxs.forEach(BreadCrumbTextBox => {
  //     BreadCrumbTextBox.classList.remove('display');
  //   });
  // }

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
  if(newsletterH < hrmlScroll && (contactH) > hrmlScroll) {
    resetActive();
    BreadCrumbTexts[5].classList.add('active');
  }
  if((contactH - (contactH / 20)) < hrmlScroll) {
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
  targetEl.parentNode.classList.add('display');
});

// const bodyH = body.scrollHeight; 4362
// let bodyH = body.getBoundingClientRect().top * -1;
// console.log(body.getBoundingClientRect().top * -1);

// console.log(BreadCrumb.getBoundingClientRect())

// BreadCrumbTexts.forEach(BreadCrumbText => {
//   console.log(BreadCrumbText.hasAttribute('class'))
// });

// 브레드크럼에 마우스커서가 진입하면 모든 메뉴가 표시됩니다.
// BreadCrumb.addEventListener('mouseenter', () => {
//   BreadCrumbTextBoxs.forEach(BreadCrumbTextBox => {
//     BreadCrumbTextBox.classList.add('display');
//   });
// });
// TO DD : 마우스 진입시 active된 메뉴는 표시.

// 브레드크럼에 마우스커서가 빠져나가면 모든 메뉴가 사라집니다.
// BreadCrumb.addEventListener('mouseleave', () => {
//   BreadCrumbTextBoxs.forEach(BreadCrumbTextBox => {
//     BreadCrumbTextBox.classList.remove('display');
//   });
// });
// TO DD : 모든 메뉴가 사라져도 active 메뉴는 표시.

