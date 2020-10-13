/* eslint-disable no-unused-vars */

const logForm = document.getElementById('login');
const regForm = document.getElementById('register');
const btnLog = document.getElementById('btn-log');
const btnReg = document.getElementById('btn-reg');

const register = () => {
  logForm.style.left = '-400px';
  regForm.style.left = '50px';
  btnReg.classList.remove('btn-secondary');
  btnReg.classList.add('btn-primary');
  btnLog.classList.add('btn-secondary');
};

const login = () => {
  logForm.style.left = '50px';
  regForm.style.left = '450px';
  btnLog.classList.remove('btn-secondary');
  btnLog.classList.add('btn-primary');
  btnReg.classList.add('btn-secondary');
};
