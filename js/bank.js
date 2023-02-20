document.getElementById('withdraw-btn').addEventListener('click', () => {
  console.log('withdeaw btn clicked...');
  let withdeaw = parseFloat(document.getElementById('withdraw-fild').innerText);
  let withdeawAmount = parseFloat(document.getElementById('withdraw-amount').value);
  if(document.getElementById('withdraw-amount').value <= 0){
    alert('Input valid number!!!');
    document.getElementById('withdraw-amount').value = '';
    return;
  }
  withdeaw += withdeawAmount;
  document.getElementById('withdraw-fild').innerText = withdeaw;

  let totalAmount = parseFloat(document.getElementById('total-fild').innerText);
  totalAmount -= withdeawAmount;
  document.getElementById('total-fild').innerText = totalAmount;

  document.getElementById('withdraw-amount').value = '';
});

document.getElementById('deposit-btn').addEventListener('click', () => {
  console.log('deposit btn clicked...');

  let deposit = parseFloat(document.getElementById('deposit-fild').innerText);
  let depositAmount = parseFloat(document.getElementById('deposit-amount').value);
  if(document.getElementById('deposit-amount').value <= 0){
    alert('Input valid number!!!');
    document.getElementById('deposit-amount').value = '';
    return;
  }
  deposit += depositAmount;
  document.getElementById('deposit-fild').innerText = deposit;

  let totalAmount = parseFloat(document.getElementById('total-fild').innerText);
  totalAmount += depositAmount;
  document.getElementById('total-fild').innerText = totalAmount;

  document.getElementById('deposit-amount').value = '';

});
