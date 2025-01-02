/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let maxAge = -1;
    let index = -1;

    for (let i = 0; i < list.length; i++) {
        if (list[i].gender == 'Male' && list[i].age > maxAge) {
            maxAge = list[i].age;
            index = i + 1;
        }
    }

    return index == -1 ? undefined : index;
}

module.exports = census;
