#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Задаем команду current и её опции
const argv = yargs(hideBin(process.argv))
  .command({
    command: 'current',
    describe: 'Текущая дата и время',
    builder: (yargs) => {
      yargs
        .option('year', {
          alias: 'y',
          describe: 'Текущий год',
          type: 'boolean',
        })
        .option('month', {
          alias: 'm',
          describe: 'Текущий месяц',
          type: 'boolean',
        })
        .option('date', {
          alias: 'd',
          describe: 'Дата в календарном месяце',
          type: 'boolean',
        });
    },

    // Выводим результат выполнения команды current с опциями
    handler: (argv) => {
      // console.log(argv);
      // console.log(argv.year);
      // console.log(argv.month);
      // console.log(argv.date);

      if (argv.year) {
        console.log(`Текущий год: ${new Date().getFullYear()}`);
      } else if (argv.month) {
        console.log(`Текущий месяц: ${new Date().getMonth() + 1}`);
      } else if (argv.date) {
        console.log(`Дата в календарном месяце: ${new Date().getDate()}`);
      } else {
        console.log(`Текущая дата и время в формате ISO: ${new Date().toISOString()}`);
      }
    },
  })

  // Получение даты в будущем через команду add

  .command({
    command: 'add',
    describe: 'Добавляем указанное время',
    builder: (yargs) => {
      yargs
        .option('year', {
          alias: 'y',
          describe: 'Прибавляем указанное количество лет',
          type: 'number',
        })
        .option('month', {
          alias: 'm',
          describe: 'Прибавляем указанное количество месяцев',
          type: 'number',
        })
        .option('date', {
          alias: 'd',
          describe: 'Прибавляем указанное количество дней',
          type: 'number',
        })
    },

    handler: (argv) => {
const test = new Date();


 //console.log(new Date().getFullYear() + argv.year);
      if (argv.year) {
        const year = new Date().getFullYear();
        const yearAdd = year + argv.year;
        console.log(`Вы прибавили к текущему ${year} году ${argv.year}, Результат: Текущий год: ${yearAdd}.`);
      } else if (argv.month) {
        const month = new Date().getMonth() + 1;
        const monthAdd = month + argv.month;
        console.log(`Вы прибавили к текущему ${month} месяцу ${argv.month}, Результат: Текущий месяц: ${monthAdd}.`);
      } else if (argv.date) {
        new Date().setDate(new Date().getDate() + argv.date);
        const date = new Date().getDate();
        const dateAdd = date + argv.date;
        console.log(`Вы прибавили к текущей ${date} дате ${argv.date}, Результат: Текущая дата: ${dateAdd}.`);
      }
    }
  })

  // Получение даты в прошлом через команду sub

  .command({
    command: 'sub',
    describe: 'Вычитаем указанное время',
    builder: (yargs) => {
      yargs
        .option('year', {
          alias: 'y',
          describe: 'Вычитаем указанное количество лет',
          type: 'number',
        })
        .option('month', {
          alias: 'm',
          describe: 'Вычитаем указанное количество месяцев',
          type: 'number',
        })
        .option('date', {
          alias: 'd',
          describe: 'Вычитаем указанное количество дней',
          type: 'number',
        })
    },

    handler: (argv) => {

      if (argv.year) {
        const year = new Date().getFullYear();
        const yearAdd = year - argv.year;
        console.log(`Вы вычли из текущего ${year} года ${argv.year}, Результат: Текущий год: ${yearAdd}.`);
      } else if (argv.month) {
        const month = new Date().getMonth() + 1;
        const monthAdd = month - argv.month;
        console.log(`Вы вычли из текущего ${month} месяца ${argv.month}, Результат: Текущий месяц: ${monthAdd}.`);
      } else if (argv.date) {
        new Date().setDate(new Date().getDate() + argv.date);
        const date = new Date().getDate();
        const dateAdd = date - argv.date;
        console.log(`Вы вычли из текущей ${date} даты ${argv.date}, Результат: Текущая дата: ${dateAdd}.`);
      }
    }


  }).argv;

// console.log(argv);
//console.log(argv.year);
// console.log(argv.month);
// console.log(argv.date);

// Конструкция
// const argv2 = yargs(hideBin(process.argv))
//   .command({
//     command: 'команда',
//     describe: 'описание',
// Задаем опции
//   builder: (yargs) => {
//     yargs
//       .option('имя опции', {
//         alias: 'альтернативная опция',
//         describe: 'описание',
//         type: 'boolean',
//       })
//   },
//   handler: (argv) => {
//     console.log("в этой секции выполняем");
//   }
// }).argv;