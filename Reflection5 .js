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



