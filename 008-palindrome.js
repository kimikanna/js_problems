/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    const len = value.length;
    const halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        if (value[i] !== value[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;
