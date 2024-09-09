function every_second(items){
    const new_list = list();
    function get_item(n, list_length, list_input, list_output){
        return n >= list_length
                ? list_output
                : get_item(n + 2, list_length, list_input, 
                append(list_output,list_ref(list_input, n + 2)));
    }
    return get_item(1, length(items), items, new_list);
    
}

every_second(list("a", "x", "b", "y", "c", "z", "d"));

