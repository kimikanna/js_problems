/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    if (password.length < 7) {
        return false;
    }

    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (char >= 'a' && char <= 'z') {
            hasLower = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }

        if (hasLower && hasUpper && hasDigit) {
            return true;
        }
    }

    return hasLower && hasUpper && hasDigit;
}

module.exports = validatePassword;
