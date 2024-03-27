const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').toString().trim().split('\n');
const n = parseInt(input.shift(0));
const coordinates = input.reduce((acc, curr) => [...acc, curr.split(' ').map(Number)], []);
let curr = 0;
let max = -Infinity;

if (n == 1) {
    max = curr + coordinates[0][0];
    fs.writeFileSync('output.txt', `${max}\n1`);
    return;
}

const coordMap = input.reduce((acc, curr, index) => acc.set(curr.split(' ').map(Number).toString(), index), new Map())
coordinates.sort((a, b) => (b[0] - b[1]) - (a[0] - a[1]));

for (let el of coordinates) {
    max = Math.max(max, curr + Number(el[0]));
    curr += el[0] - el[1];
}

let seq = coordinates.reduce((acc, curr) => 
    acc += coordMap.get(curr.toString()) + 1 + ' ', '');

fs.writeFileSync('output.txt', `${max}\n${seq.trim()}`);