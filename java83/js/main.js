// 1) Создаем объект с описанием    
class User { 
    constructor(name, age, isAdmin) { 
        this.name = name; 
        this.age = age; 
        this.isAdmin = isAdmin; 
    } 
 
    // 2) Метод для приветствия    
    greet(greetingName) { 
        return `Hello {greetingName}`; // Правильная интерполяция 
    } 
} 
 
// 3) Создаем массив объектов пользователей    
const users = [ 
    new User('Alice', 25, false), 
    new User('Bob', 30, true), 
    new User('Charlie', 22, false), 
    new User('Dave', 28, true), 
    new User('Eve', 35, false) 
]; 
 
// Переменная для хранения количества простых пользователей    
let simpleUserCount = 0; 
 
// Обходим массив пользователей    
for (let user of users) { 
    if (!user.isAdmin) { 
        simpleUserCount++; 
    } 
} 
 
// Выводим количество простых пользователей в консоль    
console.log(`Количество простых пользователей`+{simpleUserCount}); // Правильная интерполяция


const simpleUsers = users.filter(user => !user.isAdmin);
console.log("Список простых пользователей:", simpleUsers.map(user => user.name).join(", "));