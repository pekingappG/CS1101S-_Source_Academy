function insert_cmp(x, xs, cmp) {
            return is_null(xs)
                ? list(x)
                : cmp(x, head(xs))
                ? pair(x, xs)
                : pair(head(xs), insert_cmp(x, tail(xs), cmp));
}
function insertion_sort_cmp(xs, cmp) {
            return is_null(xs)
                ? xs
                : insert_cmp(head(xs),
                insertion_sort_cmp(tail(xs), cmp),cmp);
}

const reverse_sort = xs => insertion_sort_cmp(xs, (x,y) => false);
const test_lst = list(1,2,3,4,5);
reverse_sort(test_lst);





            