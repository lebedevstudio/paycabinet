/*
 * Фейковые данные только для целей разработки.
 */

export default {
    current: {
        id: 1
    },
    total: {
        id: null,
        cost: null
    },
    discount: {
        title: null
    },
    course: {
        id: null, title: null, cost: null, discounts: [], extras: []
    },
    courses: [
        {id: 1, title: 'Путь тренера', cost: 12990, discounts: [1, 2], extras: [2, 9]},
        {id: 2, title: 'Алмазная спина', cost: 15990, discounts: [1, 2], extras: [1, 2, 5, 9]},
        {id: 3, title: 'Генератор долголетия', cost: 5990, discounts: [1, 2], extras: [1, 5]}
    ],
    discounts: [
        {id: 1, title: 'abc', discount: 25},
        {id: 2, title: 'abc2', discount: 50}
    ],
    extras: [
        {id: 1, title: 'С тренером', cost: 5990},
        {id: 2, title: '2 месяца кураторства', cost: 35990},
        {id: 5, title: 'Месяц кураторства', cost: 15990},
        {id: 9, title: '3 месяца кураторства', cost: 15990}
    ]
}
