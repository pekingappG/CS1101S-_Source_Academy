// Q1
function flatten_list(xs){
    const start_lst = null;
    function helper(xs, result){
        return is_null(xs)
                ? result 
                : helper(tail(xs), append(result, head(xs)));
    }
    return helper(xs, start_lst);
}

const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9)); 
flatten_list(LoL);


// Q2
function tree_sum(xs){
    return is_null(xs)
            ? 0
            : is_list(head(xs))
            ? tree_sum(head(xs)) + tree_sum(tail(xs))
            : head(xs) + tree_sum(tail(xs));
    
}
const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7)); 
tree_sum(my_tree);

// Q3
function accumulate_tree(f, op, initial, tree){
    return is_null(tree)
            ? initial
            : is_list(head(tree))
            ? op(accumulate_tree(f, op, initial, head(tree)), accumulate_tree(f, op, initial, tail(tree)))
            : op(f(head(tree)), accumulate_tree(f, op, initial, tail(tree)));
}

function tree_sum_ac(tree) {
        return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}
tree_sum_ac(my_tree);



/**

function flatten_ac(tree) {
            return accumulate_tree(x => list(x), append, null , tree);
}

flatten_ac(LoL);
**/



//Q3
// use accumulate function to implement the accumulate_tree function 
function accumulate(op, initial, xs) {
            return is_null(xs)
            ? initial
            : op(head(xs), accumulate(op, initial, tail(xs)));
}


function accmumulate_tree(f, op, initial, tree){
    return accumulate(
        (x, ys) => !is_list(x)? op(x, ys): op(accmumulate_tree(f, op, initial, x), accmumulate_tree(f, op, initial, ys)),
        initial,
        tree
        );
}

//但是感觉像脱裤子放屁，难绷
// actually, list can have list as elements, so the implementation of accumulate
// is not good enough(it can only be used for simple lists)
// when u define a function which has conditional expressions, and put it
// in the arguments 
// why not just define a new function 
// so i think it's better to write a new function directly instead of using 
// the previous one















