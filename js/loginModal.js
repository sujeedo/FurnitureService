/* 'use strict' */

/* Header Login Info */

/*
  로그인은 실제 DB를 연결하지 않고, 로컬스토리지에 체크박스 선택시 입력 값을 저장하게 하여 유저네임칸에 저장된 키 값을 출력하게 하였습니다.
  로그아웃을 하지 않는다면 새로고침을 해도 저장된 키 값은 사라지지 않기에 로그인이 유지됩니다.
  로그인 실패는 체크박스를 선택하지 않았을 경우 실패창이 뜨도록 구현했습니다.
  그 외에 로그아웃 체크창, 비밀번호 리셋창, 비밀번호 리셋 완료 메세지창까지 구현하였습니다.
*/

const skipMenu = document.querySelector('.skip_menu');
const userName = document.querySelector('.user_name');
const userStatusBtn = document.querySelector('.user_status');
const modalContainer = document.querySelector('.modal_container');
const logoutBox = document.querySelector('.logout_box');
const loginBox = document.querySelector('.login_input_box');

// 모달 내부에 포커스를 유지하기 위해 모달외 요소의 tabindex값을 -1로 바꿔줍니다.
function modalInFocus(tar) {
  // 모달 요소를 뺀 나머지 포커스 요소들을 모두 선택합니다.
  const allBackgroundInputElements = document.querySelectorAll('body input');
  const allBackgroundSelectElements = document.querySelectorAll('body select');
  const allBackgroundButtonElements = document.querySelectorAll('body button');
  const allBackgroundAElements = document.querySelectorAll('body a');
  for (const element of allBackgroundInputElements) {
    element.setAttribute('tabindex', "-1");
  }
  for (const element of allBackgroundSelectElements) {
    element.setAttribute('tabindex', "-1");
  }
  for (const element of allBackgroundButtonElements) {
    element.setAttribute('tabindex', "-1");
  }
  for (const element of allBackgroundAElements) {
    element.setAttribute('tabindex', "-1");
  }
  const modalInputElements = document.querySelectorAll('.' + tar + ' input');
  const modalButtonElements = document.querySelectorAll('.' + tar + ' button');
  const modalAElements = document.querySelectorAll('.' + tar + ' a');
  for (modalInputElement of modalInputElements) {
    modalInputElement.setAttribute('tabindex', "0");
  }
  for (modalButtonElement of modalButtonElements) {
    modalButtonElement.setAttribute('tabindex', "0");
  }
  for (modalAElement of modalAElements) {
    modalAElement.setAttribute('tabindex', "0");
  }
}
function modalOutFocus() {
  const allBackgroundInputElements = document.querySelectorAll('body input');
  const allBackgroundSelectElements = document.querySelectorAll('body select');
  const allBackgroundButtonElements = document.querySelectorAll('body button');
  const allBackgroundAElements = document.querySelectorAll('body a');
  for (const element of allBackgroundInputElements) {
    element.setAttribute('tabindex', "0");
  }
  for (const element of allBackgroundSelectElements) {
    element.setAttribute('tabindex', "0");
  }
  for (const element of allBackgroundButtonElements) {
    element.setAttribute('tabindex', "0");
  }
  for (const element of allBackgroundAElements) {
    element.setAttribute('tabindex', "0");
  }
}

// 로그아웃 & 로그인 버튼을 클릭하면 모달창이 나타납니다.
userStatusBtn.addEventListener('click', () => {
  modalContainer.classList.remove('none');
  const logoutText = userStatusBtn.innerText;
  if(logoutText == 'LOGOUT') {
    logoutBox.classList.remove('none');
    document.querySelectorAll('.btn_logout')[0].focus();
    modalInFocus('modal_container');
  }
  if(logoutText == 'LOGIN') {
    loginBox.classList.remove('none');
    document.querySelector('#user_id').focus();
    modalInFocus('modal_container');
  }
});

// mypage 구현이 안되어 있으므로 유저 네임란 포커스 제거.
userName.blur();

/* Login Modal */
const userNameText = document.querySelector('.user_name_text');
const loginCloseBtn = document.querySelector('.login_input_box .btn_close');
const loginInputForm = document.querySelector('.login_input');
const loginInput = document.querySelector('.login_input input[type=text]');
const loginPassword = document.querySelector('.login_input input[type=password]');
const loginCheckBox = document.querySelector('.login_input input[type=checkbox]');
const loginforgetBtn = document.querySelector('.forget_pass_btn');
const loginResetBox = document.querySelector('.password_reset');
const loginFailBox = document.querySelector('.login_fail');
const loginFailCloseBtn = document.querySelector('.login_fail .btn_close');
const loginFailBtn = document.querySelector('.btn_login_fail');
const loginResetCloseBtn = document.querySelector('.password_reset .btn_close');
const loginResetBtns = document.querySelectorAll('.password_reset_btn');
const loginMessageBox = document.querySelector('.reset_message');
const loginMessagecloseBtn = document.querySelector('.reset_message .btn_close');
const loginMessageBtn = document.querySelector('.reset_message_btn');

// 로그인 입력창이 닫힐때마다 입력값이 초기화됩니다.
function inputReset() {
  loginInput.value = null;
  loginPassword.value = null;
  loginCheckBox.checked = false;
}
// 로그인 입력창의 닫기버튼을 클릭하면, 모달창이 닫히고, 입력값이 초기화됩니다.
loginCloseBtn.addEventListener('click', () => {
  modalContainer.classList.add('none');
  loginBox.classList.add('none');
  inputReset();
  modalOutFocus();
  userStatusBtn.focus();
});

// 아이디와 패스워드를 입력하고 로그인버튼을 통해 로그인 입력폼 데이터를 송신하면 아래의 코드가 실행됩니다.
loginInputForm.addEventListener('submit', (event) => {
  // 송신 이벤트의 기본 동작을 중단시켜줍니다.
  event.preventDefault(); 
  // 체크박스 선택 유무를 조건으로 코드를 실행합니다.
  const currentUser = loginInput.value
  const checkBox = loginCheckBox.checked;
  // 만약 체크박스가 선택되어있는 상태라면,
  // 모달창을 닫습니다. 
  // 로컬스토리지에 값을 저장 후 저장된 값을 유저 네임란에 출력합니다.
  // 숨겨두었던 유저 네임란을 다시 보이게 합니다.
  // 로그인 버튼을 로그아웃 버튼으로 바꿉니다.
  if(checkBox) {
    modalContainer.classList.add('none');
    loginBox.classList.add('none');
    localStorage.setItem('user', currentUser);
    let currentUserLS = localStorage.getItem('user');
    userNameText.innerHTML = `welcome! <span style='color:#49ade7'>${currentUserLS}</span>`;
    userName.classList.remove('hidden'); 
    userStatusBtn.innerText = 'LOGOUT';
    modalOutFocus();
    userStatusBtn.focus();
  }
  // 만약 체크되어 있지 않다면 로그인 실패 모달창이 나타납니다.
  if(checkBox == false) {
    loginBox.classList.add('none');
    loginFailBox.classList.remove('none');
    loginFailBtn.focus();
  }
  // 입력값을 유지할 필요가 없으므로 입력 값을 초기화시켜줍니다.
  inputReset(); 
});

// 로그인실패창의 닫기버튼을 클릭하면 모달창이 닫힙니다.
loginFailCloseBtn.addEventListener('click', () => {
  modalContainer.classList.add('none');
  loginFailBox.classList.add('none');
  inputReset();
  modalOutFocus();
  userStatusBtn.focus();
});
// 로그인실패창의 OK버튼을 클릭하면 이전 로그인입력창으로 돌아갑니다.
loginFailBtn.addEventListener('click', (event) => {  
  loginFailBox.classList.add('none');
  loginBox.classList.remove('none');
  inputReset();
  document.querySelector('#user_id').focus();
  // TO DO : 로그인 입력창으로 돌아올시 입력창 포커스 자동 이동 필요.
});
// 비밀번호를 잊었냐는 물음을 클릭하면 비밀번호초기화창이 나타납니다.
loginforgetBtn.addEventListener('click', () => {  
  loginBox.classList.add('none');
  loginResetBox.classList.remove('none');
  loginResetBtns[0].focus();
});
// 비밀번호 초기화창의 닫기버튼을 클릭하면 모달창이 닫힙니다.
loginResetCloseBtn.addEventListener('click', () => {
  modalContainer.classList.add('none');
  loginResetBox.classList.add('none');
  inputReset();
  modalOutFocus();
  userStatusBtn.focus();
});
// 비밀번호 초기화창의 No버튼을 클릭하면 모달창이 닫힙니다.
loginResetBtns[0].addEventListener('click', () => {
  modalContainer.classList.add('none');
  loginResetBox.classList.add('none');
  inputReset();
  modalOutFocus();
  userStatusBtn.focus();
});
// 비밀번호 초기화창의 Yes버튼을 클릭하면 초기화완료 메세지창이 나타납니다.
loginResetBtns[1].addEventListener('click', () => {
  loginResetBox.classList.add('none');
  loginMessageBox.classList.remove('none');
  loginMessageBtn.focus();
});
// 초기화완료 메세지창의 닫기버튼을 클릭하면 모달창이 닫힙니다.
loginMessagecloseBtn.addEventListener('click', () => {
  modalContainer.classList.add('none');
  loginMessageBox.classList.add('none');
  inputReset();
  modalOutFocus();
  userStatusBtn.focus();
});
// 초기화완료 메세지창의 Go To Login 버튼을 클릭하면 로그인 입력창으로 돌아갑니다.
loginMessageBtn.addEventListener('click', () => {
  loginMessageBox.classList.add('none');
  loginBox.classList.remove('none');
  inputReset();
  document.querySelector('#user_id').focus();
});

// 로컬스토리지에 저장 된 값이 존재한다면, 
// 해당 값을 유저 네임란에 출력하여 로그인 상태를 표시합니다.
let currentUserLS = localStorage.getItem('user');
if(currentUserLS !== null) {
  userName.classList.remove('hidden');
  userNameText.innerHTML = `welcome! <span style='color:#49ade7'>${currentUserLS}</span>`;
  userStatusBtn.innerText = 'LOGOUT';
}

/* Logout Modal */
const logoutCloseBtn = document.querySelector('.logout_box .btn_close');
const logoutBtns = document.querySelectorAll('.logout_box .btn_logout');
// 로그아웃창의 닫기버튼을 클릭하면 모달창이 닫힙니다.
logoutCloseBtn.addEventListener('click', () => {
  modalContainer.classList.add('none');
  logoutBox.classList.add('none');
  modalOutFocus();
  userStatusBtn.focus();
});
// 로그아웃창의 No버튼을 클릭하면 모달창이 닫힙니다.
logoutBtns[0].addEventListener('click', () => {
  modalContainer.classList.add('none');
  logoutBox.classList.add('none');
  modalOutFocus();
  userStatusBtn.focus();
});
// 로그아웃창의 Yes버튼을 클릭하면 로그아웃창은 닫히고 로그인버튼이 나타납니다.
// 마지막으로 로컬스토리지에 저장된 값을 제거합니다.
logoutBtns[1].addEventListener('click', () => {
  modalContainer.classList.add('none');
  logoutBox.classList.add('none');
  userName.classList.add('hidden');
  userStatusBtn.innerHTML = 'LOGIN';
  localStorage.removeItem('user');
  modalOutFocus();
  userStatusBtn.focus();
});
