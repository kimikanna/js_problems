/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let firstTeamScore = 0;
    let secondTeamScore = 0;

    for (const score of points) {
        const scores = score.split('-');
        const team1Score = Number(scores[0]);
        const team2Score = Number(scores[1]);
        firstTeamScore += team1Score;
        secondTeamScore += team2Score;
    }

    if (firstTeamScore > secondTeamScore) {
        return 1; // Победила команда 1
    } else if (secondTeamScore > firstTeamScore) {
        return 2; // Победила команда 2
    } else {
        return undefined; // Ничья
    }
}

module.exports = getWinner;
