function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function appendCharacter(character) {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue + character;
}

function calculate() {
    let currentValue = document.getElementById('display').value;
    try {
        let result = eval(currentValue);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
