let vetor = [];
let aux = -1;
let i = 0;

function setup() {
    createCanvas(800, 600);
    vetor = new Array(width);
    for (let i = 0; i < vetor.length; i++){ 
        vetor[i] = random(height);
    }
}

function insertionSort(vetor) {
    for (i = 1; i < vetor.length; i++) {
        console.log(vetor);
        for (j = 0; j < vetor.length; j++) {
            if (vetor[j] >= vetor[i]) {
                aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
    return vetor;
}

function drawLines() {
    for (let i = 0 ; i < vetor.length; i++) {
        stroke(255);
        line(i, height, i, height - vetor[i])
    }
}

function draw() {
    background(0);

    if (i < vetor.length) {
        for (j = 0; j < vetor.length; j++) {
            if (vetor[j] >= vetor[i]) {
                aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
    i++

    drawLines();

}