// 23-24 RA2 PYP


let A = [2, 1];
function check(A) {
    let i = 0;
    let sum = 0;
    while (i < array_length(A)) {
        let curr = A[i];
        sum = sum + curr;
        i = i + 1;
    }
    return () => sum > A[i - 1];
}
let curr = 0;
while (check(A)()) {
    A[array_length(A)] = curr;
    curr = curr - 1;
    let m = 1;
}
[curr, array_length(A)];
