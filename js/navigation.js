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

/*
window.onresize = function mobileSize() {};
if(window.clientWidth > 820px) {};
window.addEventListener('resize', () => {});
let media = window.matchMedia('screen and (min-width: 812px)').matches == true
window.addEventListener('resize', () => {if(media == true) {}});
*/

// drawer버튼을 클릭하면 gnb가 열립니다. 그리고 drawer모양이 close모양으로 바뀝니다.
drawerBtn.addEventListener('click', () => {
  menu.classList.toggle('open_gnb');
  drawerBtn.classList.toggle('close_icon');
  userStatusBtn.classList.toggle('left');
  userStatusBtn.classList.toggle('tophidden');
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
  userStatusBtn.classList.add('tophidden');
});

function mobile() {
  console.log('모바일')
  // gnb의 상단메뉴 중 하위메뉴가 있는 메뉴를 클릭하면 하위메뉴가 열립니다.
  mainMenuTexts[0].addEventListener('click', () => {
    if(window.innerWidth < 812) {
      subMenus[0].classList.toggle('open_sub_menu');
      arrowicons[0].classList.toggle('top');
      subMenus[1].classList.remove('open_sub_menu');
      subMenus[2].classList.remove('open_sub_menu');
      arrowicons[1].classList.remove('top');
      arrowicons[2].classList.remove('top');
      userStatusBtn.classList.remove('left');
      let subMenuH = subMenus[0].clientHeight + 305;
      userStatusBtn.style.top = subMenuH + 'px';
    }else {
      return false
    }
  });
  mainMenuTexts[1].addEventListener('click', () => {
    if(window.innerWidth < 812) {
      subMenus[1].classList.toggle('open_sub_menu');
      arrowicons[1].classList.toggle('top');
      subMenus[0].classList.remove('open_sub_menu');
      subMenus[2].classList.remove('open_sub_menu');
      arrowicons[0].classList.remove('top');
      arrowicons[2].classList.remove('top');
      userStatusBtn.classList.remove('left');
      let subMenuH = subMenus[1].clientHeight + 305;
      userStatusBtn.style.top = subMenuH + 'px';
    }else {
      return false
    }
  });
  mainMenuTexts[2].addEventListener('click', () => {
    if(window.innerWidth < 812) {
      subMenus[2].classList.toggle('open_sub_menu');
      arrowicons[2].classList.toggle('top');
      subMenus[0].classList.remove('open_sub_menu');
      subMenus[1].classList.remove('open_sub_menu');
      arrowicons[0].classList.remove('top');
      arrowicons[1].classList.remove('top');
      userStatusBtn.classList.remove('left');
      userStatusBtn.classList.remove('left');
      let subMenuH = subMenus[2].clientHeight + 305;
      userStatusBtn.style.top = subMenuH + 'px';
    }else {
      return false
    }
  });

  // gnb의 상단메뉴 중 하위메뉴가 없는 메뉴를 클릭하면 하위메뉴가 닫힙니다.
  mainMenus[3].addEventListener('click', () => {
    if(window.innerWidth < 812) {
      subMenus[0].classList.remove('open_sub_menu');
      subMenus[1].classList.remove('open_sub_menu');
      subMenus[2].classList.remove('open_sub_menu');
      arrowicons[0].classList.remove('top');
      arrowicons[1].classList.remove('top');
      arrowicons[2].classList.remove('top');
      userStatusBtn.classList.add('left');
    }else {
      return false
    }
  });

  // 하위 메뉴 마지막 요소를 포커스가 벗어나면, 하위 메뉴가 닫힙니다.
  subMenuLists[19].addEventListener('focusout', () => {
    if(window.innerWidth < 812) {
      subMenus[2].classList.remove('open_sub_menu');
      arrowicons[2].classList.remove('top');
      userStatusBtn.classList.add('left');
    }else {
      return false
    }
  });

  const loginBtn = document.querySelector('.user_status');
  // contact us메뉴를 지나면 포커스가 login으로 이동합니다.
  mainMenus[6].addEventListener('keydown', (e) => {
    if(window.innerWidth < 812) {
    if (e.keyCode === 9 && !e.shiftKey) {
      e.preventDefault();
      loginBtn.focus();
    }
  }else {
    return false
  }
  });
  // login메뉴의 이전 포커스를 contact us메뉴로 지정합니다.
  loginBtn.addEventListener('keydown', (e) => {
    if(window.innerWidth < 812) {
      if(e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        mainMenus[6].querySelector('.main_menu a').focus();
      }
    }else {
      return false
    }
  });
  
}

function desktop() {
  console.log('피씨')

  // gnb의 상단메뉴 중 하위메뉴가 있는 메뉴에 커서가 진입하면 하위메뉴가 열립니다.
  mainMenuTexts[0].addEventListener('mouseenter', () => {
    if(window.innerWidth > 812) {
      subMenus[0].classList.add('open_sub_menu');
      subMenus[1].classList.remove('open_sub_menu');
      subMenus[2].classList.remove('open_sub_menu');
    }else {
      return false
    }
  });
  mainMenuTexts[1].addEventListener('mouseenter', () => {
    if(window.innerWidth > 812) {
      subMenus[1].classList.add('open_sub_menu');
      subMenus[0].classList.remove('open_sub_menu');
      subMenus[2].classList.remove('open_sub_menu');
    }else {
      return false
    }
  });
  mainMenuTexts[2].addEventListener('mouseenter', () => {
    if(window.innerWidth > 812) {
      subMenus[2].classList.add('open_sub_menu');
      subMenus[0].classList.remove('open_sub_menu');
      subMenus[1].classList.remove('open_sub_menu');
    }else {
      return false
    }
  });

  mainMenuTexts[0].addEventListener('focus', () => {
    if(window.innerWidth > 812) {
      subMenus[0].classList.add('open_sub_menu');
      subMenus[1].classList.remove('open_sub_menu');
      subMenus[2].classList.remove('open_sub_menu');
    }else {
      return false
    }
  });
  mainMenuTexts[1].addEventListener('focus', () => {
    if(window.innerWidth > 812) {
      subMenus[1].classList.add('open_sub_menu');
      subMenus[0].classList.remove('open_sub_menu');
      subMenus[2].classList.remove('open_sub_menu');
    }else {
      return false
    }
  });
  mainMenuTexts[2].addEventListener('focus', () => {
    if(window.innerWidth > 812) {
      subMenus[2].classList.add('open_sub_menu');
      subMenus[0].classList.remove('open_sub_menu');
      subMenus[1].classList.remove('open_sub_menu');
    }else {
      return false
    }
  });

  // 마우스 커서가 하위메뉴를 벗어나거나 하위메뉴가 없는 메뉴에 진입하면 닫힙니다.
  subMenus[0].addEventListener('mouseleave', () => {
    if(window.innerWidth > 812) {
      subMenus[0].classList.remove('open_sub_menu');
      arrowicons[0].classList.remove('top');
    }else {
      return false
    }
  });
  subMenus[1].addEventListener('mouseleave', () => {
    if(window.innerWidth > 812) {
      subMenus[1].classList.remove('open_sub_menu');
      arrowicons[1].classList.remove('top');
    }else {
      return false
    }
  });
  subMenus[2].addEventListener('mouseleave', () => {
    if(window.innerWidth > 812) {
      subMenus[2].classList.remove('open_sub_menu');
      arrowicons[2].classList.remove('top');
    }else {
      return false
    }
  });
  mainMenus[3].addEventListener('mouseenter', () => {
    if(window.innerWidth > 812) {
      subMenus[2].classList.remove('open_sub_menu');
      arrowicons[2].classList.remove('top');
    }else {
      return false
    }
  });

  // focus가 하위메뉴 마지막 요소를 벗어나면 닫힙니다.
  subMenuLists[19].addEventListener('focusout', () => {
    if(window.innerWidth > 812) {
      subMenus[2].classList.remove('open_sub_menu');
    }else {
      return false
    }
  });
}

// function reactive() {
//   if(window.innerWidth < 812) {
//     mobile();
//   } 
//   else {
//     desktop();
//   }
// }

// let resizeId = "";
window.addEventListener('resize', () => {
  // clearTimeout(resizeId);
  //   resizeId = setTimeout(reactive, 250);
  mobile();
  desktop();
});

window.addEventListener('load', () => {
  mobile();
  desktop();
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
