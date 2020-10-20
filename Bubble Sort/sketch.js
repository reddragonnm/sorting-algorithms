let numArr;

let nums;
let widthRect;

let n = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    nums = 1000;
    numArr = new Array(nums);
    widthRect = width / nums;

    initiateArr()
}

function initiateArr() {
    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = new Number();
    }
}

class Number {
    constructor() {
        this.val = random(height);

        this.rectColor = color(random(255), random(255), random(255));
        // this.rectColor = color(map(this.val, 0, height, 255, 0));
    }

    show(i) {
        noStroke();
        fill(this.rectColor);
        rect(i * widthRect, height - this.val, widthRect, this.val);
    }
}

function bubbleSort() {
    for (let j = 0; j < numArr.length - 1; j++) {
        a = numArr[j];
        b = numArr[j + 1];

        if (a.val < b.val) {            
            swap(numArr, j, j + 1);
        }
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function draw() {
    background(255, 255, 0);

    if (n < numArr.length) {
        bubbleSort();
    } 
    else {
        noLoop();
    }

    // console.log(numArr[1]);

    n++;

    for (let i = 0; i < numArr.length; i++) {
        numArr[i].show(i);
    }
}