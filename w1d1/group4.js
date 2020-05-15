// Bubble Sort
// GET OUT DENYS! LOL
x = [4, 7, 1, 0, -4, 3]

function bubble(x) {
    placeholder = 0;
    for (var i = 0; i < x.length - 1; i++) {
        for (var j = i + 1; j < x.length; j++) {

            if (x[i] > x[j]) {
                placeholder = x[j];
                x[j] = x[i];
                x[i] = placeholder;
            }
        }
    }
    return x;
}
bubble(x);

// jsbin.com{}


// Gonna pull people back into the main room soon! -Brendan
function select(value){
    for (var i = 0; i < arr.length; i++)
}