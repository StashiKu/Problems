// Ограничение времени	1 секунда
// Ограничение памяти	64Mb

// Вася решил заняться торговлей рыбой. С помощью методов машинного обучения он предсказал 
// цены на рыбу на N дней вперёд. Он решил, что в один день он купит рыбу, 
// а в один из следующих дней — продаст (то есть совершит или ровно одну покупку и 
// продажу или вообще не совершит покупок и продаж, если это не принесёт ему прибыли). 
// К сожалению, рыба — товар скоропортящийся и разница между номером дня продажи и номером 
// дня покупки не должна превышать K.

// Определите, какую максимальную прибыль получит Вася.

// Формат ввода
// В первой строке входных данных задаются числа N и K (1 ≤ N ≤ 10000, 1 ≤ K ≤ 100).

// Во второй строке задаются цены на рыбу в каждый из N дней. Цена — целое число, 
// которое может находится в пределах от 1 до 109.

// Формат вывода
// Выведите одно число — максимальную прибыль, которую получит Вася.

// Пример 1

// Ввод            Вывод           
// 5 2             2 
// 1 2 3 4 5

// Пример 2

// Ввод            Вывод           
// 5 2             0 
// 5 4 3 2 1       

const fs = require('fs');

function sell_fish(file) {
    let input = fs.readFileSync(file, 'utf8').toString().trim().split('\n');
    let [predictDays, gap] = input[0].split(' ').map(Number);
    let prices = input[1].split(' ').map(Number);

    if (predictDays <= 1) {
        fs.writeFileSync('output.txt', String(0));
    }

    gap = gap >= predictDays ? predictDays - 1 : gap;
    let l = 0;
    let r = 1;
    let max = 0;

    while (r < predictDays) {
        if (l < r) {
            if (r - l <= gap && (prices[l] < prices[r])) {
                max = Math.max(max, prices[r] - prices[l]);
                r++;
            } else {
                l++;
            }
        } else { 
            l = r;
            r++;
        }
    }

    return max;
}

function test() {
    const testData = [
        { input: '5 2\n1 2 3 4 5', output: 2 },
        { input: '5 2\n5 4 3 2 1', output: 0 },
        { input: '10 10\n6 7 5 5 10 10 1 8 5 10', output: 9 },
        { input: '3 1\n1 2 4', output: 2 },
    ];
    const file = 'input.txt'

    function _test(testData) {
        fs.writeFileSync(file, testData.input);
        const expRes = testData.output;
        const res = sell_fish(file);
        const faildStatus = '[FAILED]::::';
        const successStatus = '[success]::::';
        const currStatus = res === expRes? successStatus : faildStatus;

        console.log(`${currStatus}Input: ${testData.input.split('\n')}; expected result: ${expRes}; actual result: ${res}`);
    }

    testData.forEach(_test);
}

test();