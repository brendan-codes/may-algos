// John Stevens, Jon Yoo

function stringCompare(S, T) {
    let one = convertToArray(S);
    let two = convertToArray(T);

    return one.join('') === two.join('');
}

function convertToArray(str) {
    let output = [];

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '#') {
            output.pop();
        } else {
            output.push(str.charAt(i));
        }
    }

    return output;
}

//

// basically the same thing

function backspaceStringCompare(S,T){
    let stack1 = [], stack2 = []
    for (const char of S){
        if (char === "#"){stack1.pop()}
        else {stack1.push(char)}
    }
    for (const char of T){
        if (char === "#"){stack2.pop()}
        else {stack2.push(char)}
    }
    return stack1.join("") == stack2.join("")
}
console.log(backspaceStringCompare("ab#c", "ad#c")) // Output -> true
console.log(backspaceStringCompare("ab##", "c#d#")) // Output -> true
console.log(backspaceStringCompare("a##c", "#a#c")) // Output -> true
console.log(backspaceStringCompare("a##cd", "#a#ce")) // Output -> false

// The answer to number 2:

function SinT(S, T){
    S = S.toLowerCase()
    T = T.toLowerCase()
    let SMap = {}, TMap = {}
    for (const char of S){
        if (!SMap[char]){SMap[char] = 1}
        else {SMap[char] += 1}
    }
    for (const char of T){
        if (!TMap[char]){TMap[char] = 1}
        else {TMap[char] += 1}
    }
    for (const key of Object.keys(SMap)){
        if (SMap[key] > TMap[key] || !TMap[key]){return false}
    }
    return true
}

console.log(SinT("Hello world", "lloeh wordl")) // Output -> true
console.log(SinT("hey", "hello")) // Output -> false
console.log(SinT("hello", "helo")) // Output -> false
