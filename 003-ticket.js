/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let isHappy = false;
    let ticketHalf = number.length / 2;
    let equality = 0;

    for (let i = 0; i < ticketHalf; i++) {
        equality += Number(number[i]);
    }

    for (let i = ticketHalf; i <= number.length - 1; i++) {
        equality -= Number(number[i]);
    }

    if (equality == 0) {
        isHappy = true;
    }

    return isHappy;
}

module.exports = checkTicket;
