function make_postfix_exp(bae) {

    // WRITE YOUR SOLUTION HERE.
    function postfix_list(bae){
        return is_number(bae)
            ? bae
            : pair(postfix_list(bae[0]),
                pair(postfix_list(bae[2]) ,
                pair(bae[1], null)));
    }
    let postfix = [];
    let i = 0;
    function lst_array(lst){
        if (is_null(lst)){
            return postfix;
        }else{
            postfix[i] = head(lst);
            i = i + 1;
            return lst_array(tail(lst));
        }
    }
    
    
    const post_list = postfix_list(bae);
    set_head(tail(tail(post_list)),
                    list(head(tail(tail(post_list)))));
    
    function flatten_list(xs){
    const start_lst = null;
        function helper(xs, result){
            return is_null(xs)
                    ? result 
                    : helper(tail(xs), append(result, head(xs)));
        }
        return helper(xs, start_lst);
    }
    return is_number(postfix_list(bae))
        ? postfix_list(bae)
        : lst_array(flatten_list(post_list));
    
}

const bae = [ [8, "-", 2], "*", [7, "+", 3] ];
make_postfix_exp(bae);  // returns [8, 2, "-", 7, 3, "+", "*"]