
exports.min = function min (array) {
    if (array && array.length > 0 && Array.isArray(array)) {
        return Math.min(...array);
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array && array.length > 0 && Array.isArray(array)) {
        return Math.max(...array);
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (array && array.length > 0 && Array.isArray(array)) {
        return array.reduce((a, b) => (a + b)) / array.length;
    } else {
        return 0;
    }
}
