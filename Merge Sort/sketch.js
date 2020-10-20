let arr;
let arrCopy;

let nums;
let widthRect;

let historyArr = [];
let n = 0;

let checker;

function setup() {
    createCanvas(windowWidth, windowHeight);

    nums = 500;
    widthRect = width / nums;

    arr = new Array(nums);
    initiateArr();
    
    arrCopy = parseArray([...arr]);
    mergeSort(arr);

    frameRate(100);

    checker = (arr, target) => target.every(v => arr.includes(v));

}

function initiateArr() {
    for (let i = 0; i < nums; i++) {
        arr[i] = round(random(height));
    }
}

class Number {
    constructor(val) {
        this.val = val;
        this.rectColor = color(100);
    }

    show(i) {
        noStroke();
        fill(this.rectColor);
        rect(i * widthRect, height - this.val, widthRect, this.val);
    }
}

function merge(left, right) {
    let sorted = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        }
        else {
            sorted.push(right.shift());
        }
    }

    return sorted.concat(left.concat(right));
}

function updateArray(index, length, result) {
    let n = 0;
    for (let i = index; i < index + length; i++) {
        arrCopy[i] = new Number(result[n]);
        n++;
    }

    historyArr.push([...arrCopy]);
}

function mergeSort(array) {

    new_arrCopy = [];
    for (num of arrCopy) {
        new_arrCopy.push(num.val)
    }

    let index = new_arrCopy.indexOf(array[0]);
    let length = array.length;    

    if (array.length <= 1) {
        return array;
    }    

    let mid = ceil(array.length / 2); 

    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    let result = merge(left, right);
    updateArray(index, length, result);

    return result;
}

function parseArray(arr) {
    newArr = [];

    for (num of arr) {
        newArr.push(new Number(num));
    }

    return newArr;
}

function parse2noNumber(arr) {
    newArr = []
    for (num of arr) {
        newArr.push(num.val);
    }
    return newArr
}

function draw() {
    background(255, 255, 0);
    let arr = historyArr[n];

    for (let i = 0; i < arr.length; i++) {
        arr[i].show(i);
    }

    if (n >= historyArr.length - 1) {
        noLoop();
    }

    n++;
}