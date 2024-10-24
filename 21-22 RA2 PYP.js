// 21-22 RA2 PYP
//SectionB
let z = 1;
let y = 1;
let x = 1;
function goo(f) {
    z = 2;
    let y = 2;
    let x = 2;
    let g = () => 100 * x + f(y);
    z = 3;
    y = 3;
    x = 3;
    return g;
}
const hoo = goo(y => 10 * y + z);
z = 4;
y = 4;
x = 4;
const w = hoo();
w;


//SectionC
/**
function moo(f, xs) {
    function dee(g, ys) {
        if (is_null(ys)) {
            return ys;
        } else {
            return pair(g(head(ys)), moo(g, tail(ys)));
        }
    }
    return dee(f, xs);
}
let L = list(1, 2, 3);
let R = moo(w => 10 * w, L);
R;
**/