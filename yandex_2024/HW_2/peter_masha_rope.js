// код задачи 5 2 B
// Ограничение времени	1 секунда
// Ограничение памяти	512Mb

// На столе лежали две одинаковые верёвочки целой положительной длины.
// Петя разрезал одну из верёвочек на N частей, каждая из которых имеет целую 
// положительную длину, так что на столе стало N+1 верёвочек. Затем в комнату 
// зашла Маша и взяла одну из лежащих на столе верёвочек. По длинам 
// оставшихся на столе N верёвочек определите, какую наименьшую длину может 
//иметь верёвочка, взятая Машей.

// Формат ввода
// Первая строка входных данных содержит одно целое число N — количество 
// верёвочек, оставшихся на столе (2 ≤ N ≤ 1000). Во второй строке содержится 
// N целых чисел li — длины верёвочек (1 ≤ li ≤ 1000).

// Формат вывода
// Выведите одно целое число — наименьшую длину, которую может иметь верёвочка,
// взятая Машей.

// Пример 1

// Ввод           Вывод
// 4              1
// 1 5 2 1

// Пример 2

// Ввод            Вывод
// 4               24
// 5 12 4 3 1

const fs = require('fs');
function rope(file) {
    const input = fs.readFileSync(file, 'utf8').toString().trim().split('\n');
    
    const length = Number(input[0]);
    const arr = input[1].split(' ');
    const max = Math.max(...input[1].split(' '))
    
    const sum = arr.reduce((acc, curr) => acc + Number(curr), 0);
    const count = arr.reduce((acc, curr) => curr == arr[0] ? acc + 1 : acc + 0, 0);
    
    if ((count == length) || (max - (sum - max) == 0)) {
        // fs.writeFile('./output.txt', sum);
        return sum;
    } else if (max - (sum - max) > 0) {
        // fs.writeFile('./output.txt', max - (sum - max));
        return max - (sum - max);
    }
}

function test() {
    // change inputs and outputs here
    const testData = [
        {input: '4\n1 5 2 1', output: 1},
        {input: '4\n5 12 4 3', output: 24}
    ];
    const file = './input.txt'

    function _test(testData) {
        fs.writeFileSync(file, testData.input);
        const expRes = testData.output;
        // change function name
        const res = rope(file);
        const faildStatus = '[FAILED]::::';
        const successStatus = '[success]::::';
        const currStatus = res === expRes? successStatus : faildStatus;

        console.log(`${currStatus}Input: ${testData.input.split('\n')}; expected result: ${expRes}; actual result: ${res}`);
    }

    testData.forEach(_test);
}

test();
