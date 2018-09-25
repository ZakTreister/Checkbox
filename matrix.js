var grid = document.getElementsByClassName("grid");

function showUpperPart() {
    let current = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
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
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i === j || i + j === 2) {
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
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
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
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i == 0 || j === 0 || i == 2 || j === 2) {
                grid[0].children[current].style.background = 'red';
            } else {
                grid[0].children[current].style.background = 'orange';

            }
            current++;
        }
    }
}
