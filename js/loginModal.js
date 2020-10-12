/* 'use strict' */

/* Header Login Info */

/*
  로그인은 실제 DB를 연결하지 않고, 로컬스토리지에 체크박스 선택시 입력 값을 저장하게 하여 유저네임칸에 저장된 키 값을 출력하게 하였습니다.
  새로고침을 해도 저장된 키 값은 사라지지 않기에 로그인 화면이 유지됩니다.
  로그인 실패는 체크박스를 선택하지 않았을 경우 실패창이 뜨도록 구현했습니다.
  그 외에 로그아웃 체크창, 비밀번호 리셋창, 비밀번호 리셋 완료 메세지창까지 구현하였습니다.
*/

const skipMenu = document.querySelector('.skip_menu');
const userName = document.querySelector('.user_name');
const userStatusBtn = document.querySelector('.user_status');
const modalContainer = document.querySelector('.modal_container');
const logoutBox = document.querySelector('.logout_box');
const loginBox = document.querySelector('.login_input_box');
// 로그아웃 & 로그인 버튼을 클릭하면 모달창이 나타납니다.
userStatusBtn.addEventListener('click', () => {
  modalContainer.classList.remove('none');
  const logoutText = userStatusBtn.innerText;
  if(logoutText == 'LOGOUT') {
    logoutBox.classList.remove('none');
  }
  if(logoutText == 'LOGIN') {
    loginBox.classList.remove('none');
  }
});
// 유저 네임란은 포커스가 필요 없다 생각하여 없앴습니다.
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
  }
  // 만약 체크되어 있지 않다면 로그인 실패 모달창이 나타납니다.
  if(checkBox == false) {
    loginBox.classList.add('none');
    loginFailBox.classList.remove('none');
  }
  // 입력값을 유지할 필요가 없으므로 입력 값을 초기화시켜줍니다.
  inputReset(); 
});

