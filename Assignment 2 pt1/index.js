function reverseString() {

    const inputElement = document.getElementById('inputText');
    const inputStr = inputElement.value.trim();


    const outputElement = document.getElementById('outputText');


    if (inputStr === '') {
        outputElement.textContent = "Please enter a string to reverse! ";
        outputElement.style.color = 'red';
        return;
    }


    const reversed = inputStr.split('').reverse().join('');


    outputElement.textContent = reversed;
    outputElement.style.color = '#000000ff'; 
}