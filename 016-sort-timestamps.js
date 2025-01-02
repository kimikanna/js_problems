/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    list.sort(function(a, b) {
        const [hourA, minuteA, secondA] = a.split(':').map(Number);
        const [hourB, minuteB, secondB] = b.split(':').map(Number);

        const timeInSecondsA = hourA * 3600 + minuteA * 60 + secondA;
        const timeInSecondsB = hourB * 3600 + minuteB * 60 + secondB;

        return timeInSecondsA - timeInSecondsB;
    });

    return list;
}

module.exports = sortTimestamps;
