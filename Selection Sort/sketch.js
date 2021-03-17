let bars = [];
let i = 0;
let j = 0;

function setup() {
    createCanvas(800,600);
    bars = new Array(width);
    for (let i = 0; i < bars.length; i++) {
        bars[i] = random(height);
    }
}

function selectionSort(vetor) {
    let menor;

    for (let i = 0; i < vetor.length - 1; i++) {
        menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (i != menor) {
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
            clear();
            redraw();
        }
    }
    return vetor;
}

function drawBars() {

    let w = 50;
    let h = 20;

    for (let i = 0; i < bars.length; i++) {
        stroke(255);
        line(i, height, i, height - bars[i]);
    }

}

function draw() {

    if (i < bars.length - 1) {
        menor = i;
        for (let j = i + 1; j < bars.length; j++) {
            if (bars[j] < bars[menor]) {
                menor = j;
            }
        }
        if (i != menor) {
            [bars[i], bars[menor]] = [bars[menor], bars[i]];
        }
    } else {
        console.log("finished");
        noLoop();
    }
    i++



    background(0);
    drawBars();
}
