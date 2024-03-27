function insert(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    let res = [];
    let min = intervals[0][0];
    let max = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {

        if (intervals[i][0] <= max) {
            min = Math.min(min, intervals[i][0]);
            max = Math.max(max, intervals[i][1]);
        } else {
            res.push([min, max]);
            min = intervals[i][0]
            max = intervals[i][1]
        }

        res.push([min, max]);

        return res
    }
};

console.log(insert([[1, 3], [6, 9]], [2, 5]));