function isPalindrome(str) {
     
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (cleanedStr.length === 0) {
        return false;  
    }
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}


function handleCheck() {
 
    const inputElement = document.getElementById('user-input');
    const resultOutput = document.getElementById('resultOutput');
    const input = inputElement.value.trim();
 
    resultOutput.style.color = '#333';
 
    if (input === '') {
        resultOutput.textContent = "Please enter a word or number. ";
        resultOutput.style.color = '#780000ff';  
        return;
    }
 
    const isPal = isPalindrome(input);
 
    if (isPal) {
        resultOutput.textContent = `"${input}" IS a palindrome!`;
        resultOutput.style.color = '#000000ff'; 
    } else {
        resultOutput.textContent = `"${input}" is NOT a palindrome. `;
        resultOutput.style.color = '#dc3545';  
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('check-button');
 
    button.addEventListener('click', handleCheck);
});