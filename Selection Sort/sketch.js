let n = 0;
let array;
let nums;
let widthRect;

function swap(arr, a, b) {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function selectionSort(arr, n) {
    let minIndex = n;

    for (let i = n + 1; i < arr.length; i++) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i;
        }
    }

    swap(arr, n, minIndex);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = floor(random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    nums = 500;
    widthRect = width / nums;

    arr = new Array(nums);
    for (let i = 0; i < nums; i++) {
        arr[i] = map(i, 0, nums, 0, height);
    }
    shuffleArray(arr);
}

function draw() {
    background(0);
    fill(255);
    noStroke();

    selectionSort(arr, n);
    n++;

    for (let i = 0; i < arr.length; i++) {
        if (i == n) {
            fill(255, 0, 0);
        }
        else {
            fill(255);
        }

        let val = arr[i];
        rect(i * widthRect, height - val, widthRect, val);
    }
}