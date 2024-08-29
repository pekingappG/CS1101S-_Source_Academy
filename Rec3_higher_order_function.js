// REC3
// Problem1 
/**
f(y => y+z)
f(y => y+1)
g(3) g == y=>y+1
4
**/

// Problem2
function my_sum(n,initial_num,result){
    return initial_num === n+1
        ? result
        : my_sum(n,initial_num+1,result+initial_num*(initial_num+1));
}


my_sum(4,1,0);


//Problem3
//iterative process
//n


//Problem4

function sum(term,a,next,b){
    return a > b
        ? 0 
        : term(a) + sum(term,next(a),next,b);
}

const term1 = x => x*(x+1);
const next1 = x => x+1;

function my_sum_ho(a,b){
    return sum(term1,a,next1,b);
}

//my_sum_ho(1,4);




// Problem6
const x = 5;

function f(g) { 
    const x = 3;
    return x => x + g(x); // this x is from the left part of the lambda not from the upper line
}

function g(f, y) {
    const h = (y, f) => y(f); 
    return h(f, y);
}

// where declaration is made 
// (1) const (2) funciton (3) parameter 


















