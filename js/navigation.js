/* Header GNB*/

const drawerBtn = document.querySelector('header .btn_drawer');
const menuBg = document.querySelector('header .gnb_bg');
const menu = document.querySelector('header .gnb');
const mainMenus = document.querySelectorAll('header .gnb .main_menu');
const mainMenuTexts = document.querySelectorAll('header .gnb .main_menu_txt');
const subMenus = document.querySelectorAll('header .gnb .sub_menu');
const arrowicons = document.querySelectorAll('header .gnb .ico_arrow');
const subMenuLists = document.querySelectorAll('header .gnb .sub_menu a');
const searchArea = document.querySelectorAll('.home .search_area select');

// drawer버튼을 클릭하면 gnb가 열립니다. 그리고 drawer모양이 close모양으로 바뀝니다.
drawerBtn.addEventListener('click', () => {
  menu.classList.toggle('open_gnb');
  drawerBtn.classList.toggle('close_icon');
  userStatusBtn.classList.toggle('left');
});

// gnb의 상단메뉴 중 하위메뉴가 있는 메뉴를 클릭하면 하위메뉴가 열립니다.
mainMenuTexts[0].addEventListener('click', () => {
  subMenus[0].classList.toggle('open_sub_menu');
  arrowicons[0].classList.toggle('top');
  subMenus[1].classList.remove('open_sub_menu');
  subMenus[2].classList.remove('open_sub_menu');
  arrowicons[1].classList.remove('top');
  arrowicons[2].classList.remove('top');
});
mainMenuTexts[1].addEventListener('click', () => {
  subMenus[1].classList.toggle('open_sub_menu');
  arrowicons[1].classList.toggle('top');
  subMenus[0].classList.remove('open_sub_menu');
  subMenus[2].classList.remove('open_sub_menu');
  arrowicons[0].classList.remove('top');
  arrowicons[2].classList.remove('top');
});
mainMenuTexts[2].addEventListener('click', () => {
      subMenus[2].classList.toggle('open_sub_menu');
      arrowicons[2].classList.toggle('top');
      subMenus[0].classList.remove('open_sub_menu');
      subMenus[1].classList.remove('open_sub_menu');
      arrowicons[0].classList.remove('top');
      arrowicons[1].classList.remove('top');
    });

// gnb의 상단메뉴 중 하위메뉴가 없는 메뉴를 클릭하면 하위메뉴가 닫힙니다.
mainMenus[3].addEventListener('click', () => {
  subMenus[0].classList.remove('open_sub_menu');
  subMenus[1].classList.remove('open_sub_menu');
  subMenus[2].classList.remove('open_sub_menu');
  arrowicons[0].classList.remove('top');
  arrowicons[1].classList.remove('top');
  arrowicons[2].classList.remove('top');
});

// 마우스 커서가 하위메뉴를 벗어나면 닫힙니다.
subMenus[0].addEventListener('mouseleave', () => {
  subMenus[0].classList.remove('open_sub_menu');
  arrowicons[0].classList.remove('top');
});
subMenus[1].addEventListener('mouseleave', () => {
  subMenus[1].classList.remove('open_sub_menu');
  arrowicons[1].classList.remove('top');
});
subMenus[2].addEventListener('mouseleave', () => {
  subMenus[2].classList.remove('open_sub_menu');
  arrowicons[2].classList.remove('top');
});
// focus가 하위메뉴 마지막 요소를 벗어나면 닫힙니다.
subMenuLists[11].addEventListener('focusout', () => {
  subMenus[0].classList.remove('open_sub_menu');
  arrowicons[0].classList.remove('top');
});
subMenuLists[17].addEventListener('focusout', () => {
  subMenus[1].classList.remove('open_sub_menu');
  arrowicons[1].classList.remove('top');
});
subMenuLists[19].addEventListener('focusout', () => {
  subMenus[2].classList.remove('open_sub_menu');
  arrowicons[2].classList.remove('top');
});

// drawer버튼을 클릭하여 gnb영역을 닫습니다.
drawerBtn.addEventListener('click', () => {
  subMenus.forEach(subMenu => {
    subMenu.classList.remove('open_sub_menu');
  });
  arrowicons.forEach(arrowicon => {
    arrowicon.classList.remove('top');
  });
});

// gnb의 불투명한 배경을 클릭하면 gnb영역이 닫힙니다.
menuBg.addEventListener('click', () => {
  userStatusBtn.classList.remove('left');
  menu.classList.remove('open_gnb');
  subMenus.forEach(subMenu => {
    subMenu.classList.remove('open_sub_menu');
  });
  arrowicons.forEach(arrowicon => {
    arrowicon.classList.remove('top');
  });
  drawerBtn.classList.remove('close_icon');
});


/* Header Search Box*/

const searchBtn = document.querySelector('header .btn_search');
const searchBox = document.querySelector('header .search_container');
const closeBtn = document.querySelector('header .btn_close');

// search버튼을 클릭하면 search box가 나타납니다.
searchBtn.addEventListener('click', () => {
  searchBox.classList.toggle('open_searchbox');
});

// close버튼을 클릭하면 search box가 사라집니다.
closeBtn.addEventListener('click', () => {
  searchBox.classList.remove('open_searchbox');
});

// search버튼의 포커스가 지나가면 gnb영역이 닫힙니다.
searchBtn.addEventListener('focusout', () => {
  menu.classList.remove('open_gnb');
  subMenus.forEach(subMenu => {
    subMenu.classList.remove('open_sub_menu');
  });
  arrowicons.forEach(arrowicon => {
    arrowicon.classList.remove('top');
  });
  drawerBtn.classList.remove('close_icon');
});

/*
window.onresize = function mobileSize() {};
if(window.clientWidth > 820px) {};
window.addEventListener('resize', () => {});
let media = window.matchMedia('screen and (min-width: 812px)').matches == true
window.addEventListener('resize', () => {if(media == true) {}});
*/