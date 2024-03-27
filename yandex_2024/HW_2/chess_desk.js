// Ограничение времени	1 секунда
// Ограничение памяти	64Mb

// Из шахматной доски по границам клеток выпилили связную (не распадающуюся на части) 
// фигуру без дыр. Требуется определить ее периметр.

// Формат ввода
// Сначала вводится число N (1 ≤ N ≤ 64) – количество выпиленных клеток. 
// В следующих N строках вводятся координаты выпиленных клеток, разделенные пробелом 
// (номер строки и столбца – числа от 1 до 8). Каждая выпиленная клетка указывается один раз.

// Формат вывода
// Выведите одно число – периметр выпиленной фигуры (сторона клетки равна единице).

// Примечания
// 1) Вырезан уголок из трех клеток. Сумма длин его сторон равна 8.
// 2) Вырезана одна клетка. Ее периметр равен 4.

// Пример 1

// Ввод         Вывод
// 3            8
// 1 1
// 1 2
// 2 1

// Пример 2

// Ввод         Вывод
// 1            4
// 8 8

const fs = require('fs');

function main(file) {
    const input = fs.readFileSync(file, 'utf8').toString().trim().split('\n');
    const n = parseInt(input.shift(0));
    const coordinates = input.reduce((acc, curr) => [...acc, curr.split(' ')], []);
    const dx = [0, 0, 1, -1];
    const dy = [-1, 1, 0, 0];
    let maxVal = 0;
    let maxP = n * 4;

    coordinates.forEach(coordinate => {
        maxVal = Math.max(maxVal, parseInt(coordinate[0]), parseInt(coordinate[1]));
    })

    const fields = []

    for (let i = 0; i <= (maxVal + 2); i++) {
        fields.push(Array(maxVal + 2).fill(0));
    }

    for (let [pX, pY] of coordinates) {
        fields[Number(pX)][Number(pY)] = '*';
    }

    for (let [pX, pY] of coordinates) {
        for (let k = 0; k < dx.length; k++) {
            if (fields[Number(pX) + dx[k]][Number(pY) + dy[k]] == '*') {
                maxP -= 1;
            } 
        }
    }
}

main('./input.txt');
