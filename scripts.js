const globalState = {
    num1: '',
    num2: '',
    operation: ''
};

let activeInput = null;

document.getElementById('num1').addEventListener('focus', function() {
    activeInput = this;
});

document.getElementById('num2').addEventListener('focus', function() {
    activeInput = this;
});

document.getElementById('num1').addEventListener('blur', function() {
    globalState.num1 = this.value;
});

document.getElementById('num2').addEventListener('blur', function() {
    globalState.num2 = this.value;
});

document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseFloat(globalState.num1);
    const num2 = parseFloat(globalState.num2);
    const operation = globalState.operation;

    if (isNaN(num1) || isNaN(num2)) {
        if (isNaN(num1) && isNaN(num2)) {
            alert('Будь ласка, введіть обидва числа.');
        } else if (isNaN(num1)) {
            alert('Будь ласка, введіть Число 1.');
        } else {
            alert('Будь ласка, введіть Число 2.');
        }
        return;
    }

    if (!['+', '-', '*', '/'].includes(operation)) {
        alert('Будь ласка, введіть правильну операцію.');
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    alert('Результат: ' + result);
});

document.querySelectorAll('.keyboard button').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;
        if (value === 'Розрахувати' || value === 'Додати в кеш' || value === 'Показати кеш') return;
        if (['+', '-', '*', '/'].includes(value)) {
            document.getElementById('operation').value = value;
            globalState.operation = value;
        } else {
            if (activeInput) {
                activeInput.value += value;
                if (activeInput.id === 'num1') {
                    globalState.num1 = activeInput.value;
                } else {
                    globalState.num2 = activeInput.value;
                }
            }
        }
    });
});

document.getElementById('in-cache').addEventListener('click', function() {
    const valueToCache = {
        num1: globalState.num1,
        num2: globalState.num2,
        operation: globalState.operation
    };
    localStorage.setItem('cache', JSON.stringify(valueToCache));
    alert('Дані збережені в кеш.');
});

document.getElementById('out-cache').addEventListener('click', function() {
    const cachedValue = localStorage.getItem('cache');
    if (cachedValue) {
        const parsedValue = JSON.parse(cachedValue);
        console.log('Збережені дані:', parsedValue);
    } else {
        console.log('Збережених даних немає.');
    }
});
