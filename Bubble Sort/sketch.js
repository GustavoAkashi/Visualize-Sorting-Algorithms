let vetor = [];
let i = 0;

function setup() {
    createCanvas(800, 600);
    vetor = new Array(width);
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = random(height);
    }
}


function bubbleSort(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        console.log(vetor);
        for (let j = i; j < vetor.length - i - 1; j++) {
            if (vetor[j] >= vetor[j+1]) {
                [vetor[j], vetor[j+1]] = [vetor[j+1],vetor[j]]
            }
        }
    }
    return vetor;
}


function drawLines() {
    for (let i = 0; i < vetor.length; i++) {
        stroke(255);
        line(i, height, i, height - vetor[i])
    }
}


function draw() {
    background(0);
    if (i < vetor.length - 1) {
        for (let j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] >= vetor[j+1]) {
                [vetor[j], vetor[j+1]] = [vetor[j+1],vetor[j]]
            }
        }
    } else {
        console.log("finished");
        noLoop();
    }
    i++

    drawLines();
}