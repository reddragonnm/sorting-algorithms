let arr;

let history = [];
let historyStates = [];
let n = 0;

let nums;
let widthRect;

function swap(arr, a, b) {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            swap(arr, j, i);
            historyStates.push([i, j, pivot]);
            i++;
        }
    }
    swap(arr, i, end);

    return i;
}

function quickSort(arr, low=0, high=undefined) {
    history.push([...arr])

    if (high == undefined) {
        high = arr.length - 1;
    }

    if (low < high) {
        let p = partition(arr, low, high);

        // historyStates.push([p]);

        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
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

    nums = floor(width / 10);
    widthRect = width / nums;

    arr = new Array(nums);
    for (let i = 0; i < nums; i++) {
        arr[i] = map(i, 0, nums, 0, height);
    }
    shuffleArray(arr);

    quickSort(arr);
}

function draw() {
    background(0);
    fill(255);
    noStroke();

    let hist = history[n];

    for (let i = 0; i < hist.length; i++) {

        try {
            if (historyStates[n].includes(i)) {
                fill(255, 0, 0);
            }
            else {
                fill(255);
            }
        }
        catch {fill(255)}

        let val = hist[i];
        rect(i * widthRect, height - val, widthRect, val);
    }
    
    // noLoop();
    if (n >= history.length - 1) {
        noLoop();
    }
    else {
        n++;
    }
}