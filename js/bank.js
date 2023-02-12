document.getElementById('withdraw-btn').addEventListener('click', () => {
  console.log('withdeaw btn clicked...');
  let withdeaw = parseFloat(document.getElementById('withdraw-fild').innerText);
  let withdeawAmount = parseFloat(document.getElementById('withdraw-amount').value);
  withdeaw += withdeawAmount;
  document.getElementById('withdraw-fild').innerText = withdeaw;

  let totalAmount = parseFloat(document.getElementById('total-fild').innerText);
  totalAmount -= withdeawAmount;
  document.getElementById('total-fild').innerText = totalAmount;

  document.getElementById('withdraw-amount').value = '';
});

document.getElementById('deposit-btn').addEventListener('click', () => {
  console.log('deposit btn clicked...');

});
