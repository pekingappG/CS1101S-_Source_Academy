//Question2 
function every_second(items){
    const new_list = list(list_ref(items,1));
    function get_item(n, list_length, list_input, list_output){
        return n  >= list_length
                ? list_output
                : get_item(n + 2, list_length, list_input, 
                append(list_output,list(list_ref(list_input, n))));
    }
    return get_item(3, length(items), items, new_list);
    
}



//Question3 

const lst1 = list(7, list(6, 5, 4), 3, list(2, 1));
const lst2 = list(list(7), list(6, 5, 4), list(3, 2), 1);
const lst3 = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
const lst4 =list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));

function list1_exp(list){
    return head(tail(head(tail(tail(tail(list))))));
}

function list2_exp(list){
    return head(tail(tail(tail(list))));
}


function list3_exp(list){
    return head(head(tail(head(tail(head(tail(tail(tail(list)))))))));
}


function list4_exp(list){
    return head(head(head(tail(tail(list)))));
}




function even_number(items){
    function get_item(n, list_length, list_input, even_num){
        return n  >= list_length
                ? even_num
                : list_ref(items, n) % 2 === 0
                ? get_item(n + 1, list_length, list_input, 
                even_num + 1)
                : get_item(n + 1, list_length, list_input, 
                even_num);
    }
    return get_item(0, length(items), items, 0);
    
}




function even_number_recur(items){
    return is_null(items)
            ? 0
            : head(items) % 2 === 0
            ? even_number_recur(tail(items)) + 1
            : even_number_recur(tail(items));
}


even_number_recur(list(1, 2, 3, 4, 6));

// TA's method
const example = list(1, 2, 3, 4, 5, 6, 7);

function sums(lst) {
    
    function helper(lst, even, odd, is_even) {
        
        return is_null(lst)
            ? list(even, odd)
            : is_even
                ? helper(tail(lst), even + head(lst), odd, false)
                : helper(tail(lst), even, odd + head(lst), true);
    }
    
    return helper(lst, 0, 0, true);
}


sums(example);






