/* Header Bread Crumb */

const html = document.querySelector('html');
const BreadCrumb = document.querySelector('.bread');
const banner = document.querySelector('.banner_container');
const product = document.querySelector('.product');
const topic = document.querySelector('.topic');
const searchZone = document.querySelector('.search_zone');
const recent = document.querySelector('.recent_searched');
const newsletter = document.querySelector('.newsletter');
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');

// 각 섹션의 top값보다 스크롤값이 높을 경우 해당 섹션의 이름을 부차적인 네비게이션 브레드크럼에 출력합니다.
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
  if (productH > hrmlScroll) {
    BreadCrumb.classList.remove('visible');
  }
  if (productH < hrmlScroll) {
    BreadCrumb.classList.add('visible');
    BreadCrumb.innerText = 'Product';
  }
  if (topicH < hrmlScroll) {
    BreadCrumb.innerText = 'Topic';
  }
  if (searchZoneH < hrmlScroll) {
    BreadCrumb.innerText = 'Search Zone';
  }
  if (recentH < hrmlScroll) {
    BreadCrumb.innerText = 'Recent Searched';
  }
  if (newsletterH < hrmlScroll) {
    BreadCrumb.innerText = 'NewsLetter';
  }
  if (contactH < hrmlScroll) {
    BreadCrumb.innerText = 'Contact';
  }
  if (footerH < hrmlScroll) {
    BreadCrumb.innerText = 'Footer';
  }
});