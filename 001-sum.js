/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
    let result = 1;

    if (n < 1) {
        return result;
    }

    for (let i = 2; i <= n; i++) { 
        result += i;
    }

    return result;
}

module.exports = sum;
