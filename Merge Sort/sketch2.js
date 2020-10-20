let arr;
let arrCopy;

let nums;
let widthRect;

let historyArr = [];
let n = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    nums = 100;
    widthRect = width / nums;

    arr = new Array(nums);
    for (let i = 0; i < nums; i++) {
        arr[i] = round(random(height * 3 / 4));
    }

    arrCopy = [...arr];

    mergeSort(arr);
    frameRate(10);
}

function updateArray(index, length, result) {
    let n = 0;
    for (let i = index; i < index + length; i++) {
        arrCopy[i] = result[n];
        n++;
    }

    historyArr.push([...arrCopy]);
}

function merge(left, right) {
    let sorted = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    }

    return sorted.concat(left.concat(right));
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let index = arrCopy.indexOf(array[0]);
    let length = array.length;

    let mid = ceil(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    let result = merge(left, right);
    updateArray(index, length, result);

    return result;
}

function draw() {
    background(0);
    noStroke();
    fill(255);

    let history = historyArr[n];

    for (let i = 0; i < arr.length; i++) {
        let val = history[i];
        rect(i * widthRect, height - val, widthRect, val);
    }

    if (n < historyArr.length - 1) n++;
}