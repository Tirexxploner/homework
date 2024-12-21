const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 
const rainbowColors = ['Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Голубой', 'Синий', 'Фиолетовый'];

// =========Числа===========
for(let i = 2; i<numbers.length; i = i + 2) {
  console.log(i)
}

// ==========Цвета радуги=============

for (let i = rainbowColors.length - 1; i >= 0; i--) {
  console.log(rainbowColors[i]);
}