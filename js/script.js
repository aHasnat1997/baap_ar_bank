// "use strict";

document.getElementById('submit-btn').addEventListener('click', function () {
  let email = document.getElementById('email-fild').value;
  let password = document.getElementById('password-fild').value;

  const validEmail = 'hello@world.com';
  const validPassword = 'baapARbank';
  if (email === validEmail && password === validPassword) {
    window.location.href = 'bank.html';
  }
  else {
    window.alert('!Invalid User...');
  }

});




document.getElementById('email-fild').addEventListener('click', () => {
  const lableEmail = document.getElementById('email-fild-label');
  const lablePassword = document.getElementById('password-fild-label');
  lableEmail.style.top = '-1.8rem';
  lableEmail.style.fontSize = '1rem';
  // lablePassword.style.top = '0rem';
  // lablePassword.style.fontSize = '1.5rem';
});
document.getElementById('password-fild').addEventListener('click', () => {
  const lableEmail = document.getElementById('email-fild-label');
  const lablePassword = document.getElementById('password-fild-label');
  lablePassword.style.top = '-1.8rem';
  lablePassword.style.fontSize = '1rem';
  // lableEmail.style.top = '0rem';
  // lableEmail.style.fontSize = '1.5rem';
});

