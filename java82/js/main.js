function greet(name) { 
  return `Hello "${name}"`; 
} 

const result = greet("Alice");
console.log(result); 

const numbers = [5, 12, 8, 20, 3, 15];

function printNumbersGreaterThanTen(arr) {
    arr.forEach(num => {
        if (num > 10) {
            console.log(num);
        }
    });
}

printNumbersGreaterThanTen(numbers, 12); 



function calculator(num1, num2, operator) {
  switch (operator) {
      case 'plus':
          return num1 + num2;
      case 'minus':
          return num1 - num2;
      case 'multiply':
          return num1 * num2;
      case 'divide':
          return num2 !== 0 ? num1 / num2 : 'Ошибка: деление на ноль';
      default:
          return 'Ошибка: неизвестный оператор';
  }
}


const calcResult = calculator(2, 3, 'minus'); 
console.log(calcResult); 