// Вася и Маша участвуют в субботнике и красят стволы деревьев в белый цвет.
// Деревья растут вдоль улицы через равные промежутки в 1 метр.
// Одно из деревьев обозначено числом ноль, деревья по одну сторону занумерованы положительными числами 1, 2 и т.д.,
// а в другую — отрицательными −1, -2 и т.д. Ведро с краской для Васи установили возле дерева P, 
// а для Маши — возле дерева Q. Ведра с краской очень тяжелые и Вася с Машей не могут их переставить, 
// поэтому они окунают кисть в ведро и уже с этой кистью идут красить дерево.Краска на кисти из ведра Васи засыхает, 
// когда он удаляется от ведра более чем на
// V метров, а из ведра Маши — на M метров.Определите, сколько деревьев может быть покрашено. 

// Формат ввода 

// В первой строке содержится два целых числа
// P и V — номер дерева, у которого стоит ведро Васи и на сколько деревьев он может от него удаляться.
// В второй строке содержится два целых числа Q и M — аналогичные данные для Маши. 
// Все числа целые и по модулю не превосходят10^8.

// Формат вывода
// Выведите одно число — количество деревьев, которые могут быть покрашены.

// Пример
// Ввод	Вывод
// 0 7     25
// 12 5


const fs = require('fs');

function paintTrees(file) {
    if (!file) {
        console.error('Укажите в качестве первого параметра путь к файлу');
    }

    const input = fs.readFileSync(file, 'utf8').toString().trim().split('\n');
    const [P, V] = input[0].split(' ').map(Number);
    const [Q, M] = input[1].split(' ').map(Number);
    let treeQnt = 0;
    
    let [left, leftLineSegment, right, rightLineSegment] = P > Q? [Q, M, P, V] : [P, V, Q, M];
    
    if (left !== right) {
        // if intersection
        if (left + leftLineSegment > right - rightLineSegment) {
            treeQnt += right - left;
    
            // right line segment is longer the left line segment to the left
            if (left - leftLineSegment > right - rightLineSegment) {
                treeQnt += (left - (right - rightLineSegment));
            } else {
                treeQnt += leftLineSegment
            }
    
            if (left + leftLineSegment > right + rightLineSegment) {
                treeQnt += (left + leftLineSegment - right);
            } else {
                treeQnt += rightLineSegment;
            }
        } else {
            treeQnt = (2 * rightLineSegment) + (2 * leftLineSegment);
        }
    } else {
        treeQnt = leftLineSegment + rightLineSegment;
    }

    return treeQnt;
}

function test() {
    const testData = [
        {input: '1 4\n6 7', output: 16},
        {input: '0 7\n12 15', output: 25}
    ];
    const file = 'input.txt'

    function _test(testData) {
        fs.writeFileSync(file, testData.input);
        const expRes = testData.output;
        const res = paintTrees(file);
        const faildStatus = '[FAILED]::::';
        const successStatus = '[success]::::';
        const currStatus = res === expRes? successStatus : faildStatus;

        console.log(`${currStatus}Input: ${testData.input.split('\n')}; expected result: ${expRes}; actual result: ${res}`);
    }

    testData.forEach(_test);
}

test();
