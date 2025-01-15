/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    // Разбиваем строку на слова, исключая знаки препинания
    const words = value.split(/\s+/).map(word => word.replace(/[.,!?]/g, ''));

    const seen = new Map(); // Хранит количество слов в канонической форме

    // Считаем количество вхождений каждой канонической формы
    for (const word of words) {
        const canonicalForm = word.toLowerCase().split('').sort().join('');
        seen.set(canonicalForm, (seen.get(canonicalForm) || 0) + 1);
    }

    const result = [];

    // Добавляем только те слова, у которых есть повторяющиеся анаграммы
    for (const word of words) {
        const canonicalForm = word.toLowerCase().split('').sort().join('');
        if (seen.get(canonicalForm) > 1) {
            result.push(word);
        }
    }

    // console.log(seen);

    // Собираем результат в строку и возвращаем
    return result.join(' ');
}

module.exports = searchAnagrams;
