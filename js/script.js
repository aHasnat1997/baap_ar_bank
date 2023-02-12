// "use strict";

document.getElementById('submit-btn').addEventListener('click', function(){
  let email = document.getElementById('email-fild').value;
  let password = document.getElementById('password-fild').value;

  const validEmail = 'hello@world.com';
  const validPassword = 'baapARbank';
  if(email === validEmail && password === validPassword){
    window.location.href = 'bank.html';
  }
  else{
    window.alert('!Invalid User...');
  }

});

