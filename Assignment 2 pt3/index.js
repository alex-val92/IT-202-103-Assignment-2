function calculateTip() {
 
    const subtotalInput = document.getElementById('subtotal');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const totalOutput = document.getElementById('totalAmount');
    const tipOutput = document.getElementById('tipAmount');

 
    const subtotal = parseFloat(subtotalInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);

 
    if (isNaN(subtotal) || subtotal <= 0 || isNaN(tipPercentage) || tipPercentage < 0) {
        totalOutput.textContent = "Please enter valid positive numbers for the subtotal and tip %."
        totalOutput.style.color = '#dc3545';  
        tipOutput.textContent = "Tip Amount: $0.00";
        return;
    }
 
    const tipMultiplier = tipPercentage / 100;
    const tipAmount = subtotal * tipMultiplier;
    const totalAmount = subtotal + tipAmount;
 
    totalOutput.style.color = '#333'; 

    tipOutput.textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
    totalOutput.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}
 
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('calculateButton');
    
 
    button.addEventListener('click', calculateTip);
});