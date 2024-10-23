// studio 10 
// Q1  先sort一下？？？

//Q2
// (a) O(n2)
//(b)



function bubblesort_list(A) {
    const len = length(A);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let p = A;
        for (let j = 0; j < i; j = j + 1) {
            if (head(p) >= head(tail(p))) {
                const temp = head(p);
                set_head(p, head(tail(p)));
                set_head(tail(p), temp);
            }
            p = tail(p);
        }
    }
}
const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL;

// Q3
// (a) o(n2)
//(b) o(n2)