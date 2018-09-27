var grid = document.getElementsByClassName("grid");
var a = 6;

function showUpperPart() {
    console.log(grid);
    let current = 0;
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i === j || i < j) {
                grid[0].children[current].style.background = 'red';
            } else {
                grid[0].children[current].style.background = 'orange';

            }
            current++;
        }
    }
}

function showDiagonals() {
    let current = 0;
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i === j || i + j === a - 1) {
                grid[0].children[current].style.background = 'red';
            } else {
                grid[0].children[current].style.background = 'orange';

            }
            current++;
        }
    }
}

function showDownPart() {
    let current = 0;
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i === j || j < i) {
                grid[0].children[current].style.background = 'red';
            } else {
                grid[0].children[current].style.background = 'orange';

            }
            current++;
        }
    }
}

function showBorder() {
    let current = 0;
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || j === 0 || i == a - 1 || j === a - 1) {
                grid[0].children[current].style.background = 'red';
            } else {
                grid[0].children[current].style.background = 'orange';

            }
            current++;
        }
    }
}
