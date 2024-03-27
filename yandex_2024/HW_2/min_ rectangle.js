// Ограничение памяти	64Mb
// Ограничение времени	1 секунда

// На клетчатой плоскости закрашено K клеток. Требуется найти минимальный по площади прямоугольник, 
// со сторонами, параллельными линиям сетки, покрывающий все закрашенные клетки.

// Формат ввода
// Во входном файле, на первой строке, находится число K (1 ≤ K ≤ 100). На следующих 
// K строках находятся пары чисел Xi и Yi — координаты закрашенных клеток (|Xi|, |Yi| ≤ 109).

// Формат вывода
// Выведите в выходной файл координаты левого нижнего и правого верхнего углов прямоугольника.

// Пример

// Ввод      Вывод
// 4         1 1 6 5
// 1 3
// 3 1
// 3 5
// 6 3
const fs = require('fs');

function min_rect(file) {
    if (!file) {
        console.error('Укажите в качестве первого параметра путь к файлу');
    }

    const input = fs.readFileSync(file, 'utf8').toString().trim().split('\n');
    const pointQnt = parseInt(input[0]);
    const [startX, startY] = input[1].split(' ').map(Number);

    let maxY = startY;
    let minY = startY;
    let maxX = startX;
    let minX = startX;

    for (let i = 2; i < pointQnt + 1 ; i++) {
        let xy = input[i].split(' ').map(Number);

        maxY = Math.max(maxY, xy[1]);
        maxX = Math.max(maxX, xy[0]);
        minX = Math.min(minX, xy[0]);
        minY = Math.min(minY, xy[1]);
    }

    return `${minX} ${minY} ${maxX} ${maxY}`;
}

let file = 'input.txt';
fs.writeFileSync('output.txt', min_rect(file));
