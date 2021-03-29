const moment = require('moment');
const fs = require('fs');
const path = require('path');

/**
 * Используем path дабы избежать проблем с относительными путями до файлов. Делаем их абсолютными.
 */
const statsTXT = path.resolve(__dirname, './db/stats.txt');

const logger = (name, action) => {
  fs.readFile(statsTXT, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let text = '';
      switch (action.toString()) {
        case 'add': text += `${moment().format('DD MMM YYYY, h:mm:ss a')} - ${name} added to cart.\n`; break;
        case 'change': text += `${moment().format('DD MMM YYYY, h:mm:ss a')} - ${name} has changed quantity.\n`; break;
        case 'remove': text += `${moment().format('DD MMM YYYY, h:mm:ss a')} - ${name} removed from cart.\n`; break;
      }
      fs.writeFile(statsTXT, data + text, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  })
};

module.exports = logger;
