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