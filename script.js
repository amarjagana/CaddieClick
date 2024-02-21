function topUp() {
  const topUpAmount = prompt('Enter the top-up amount:');
  
  if (!isNaN(topUpAmount) && topUpAmount !== null) {
    const balanceElement = document.getElementById('balanceAmount');
    const currentBalance = parseFloat(balanceElement.textContent.replace('$', ''));
    const newBalance = currentBalance + parseFloat(topUpAmount);
    balanceElement.textContent = `$${newBalance.toFixed(2)}`;
    
    // Change the button color dynamically
    const topUpButton = document.querySelector('.top-up');
    topUpButton.style.backgroundColor = 'green';
    topUpButton.style.color = 'white';
  } else {
    alert('Invalid input. Please enter a valid number.');
  }
}
