#!/usr/bin/env node
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Генератор случайных чисел в заданном диапозоне
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Вывод генератора
const secretNumber = generateRandomNumber(1, 100);


console.log('Игра "Загадай число"!');
console.log('Внимание! Загаданно число в диапазоне от 1 до 100. Угадай число.');
//console.log(secretNumber);

// Функция обрабатывает попытки пользователя
// rl.question('What is your favorite food? ', (answer) => {
//     console.log(`Oh, so your favorite food is ${answer}`);
//   }); 
const userAttempts = () => {
    rl.question('Введите число: ', (answer) => {
      const number = parseInt(answer);
  
      if (isNaN(number)) {
        console.log('Вы ошиблись, введите число от 0 до 100.');
        userAttempts();
        return;
      }
  
      if (number === secretNumber) {
        console.log(`Число разгадано верно - ${secretNumber}`);
        console.log(`Игра завершена. Спасибо за участие!!!`);
        rl.close();
        return;
      }
  
      if (number < secretNumber) {
        console.log('Нет. Загаданное число больше.');
      } else {
        console.log('Нет. Загаданное число Меньше.');
      }
  
      userAttempts();
    });
  };
  
  userAttempts();