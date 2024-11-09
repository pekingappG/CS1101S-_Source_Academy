// Important 
// Make BST 

//=====================================================================
// TASK 1A
function split(S) {
    let i = 0;
    let result = [];
    while (char_at(S, i) !== undefined) {
        result[i] = char_at(S, i);
        i = i + 1;
    }
    return result;
}
//=====================================================================
// TASK 1B
function contains(B, A_i) {
    const lenB = array_length(B);
    for (let j = 0; j < lenB; j = j + 1) {
        if (B[j] === A_i) {
            return true;
        }
    }
    return false;
}
function num_characters_from(A, B) {
    const len = array_length(A);
    let count = 0;
    for (let i = 0; i < len; i = i + 1) {
        if (contains(B, A[i])) {
            count = count + 1;
        }
    }
    return count;
}
//=====================================================================
// TASK 1C
//相当于只数了最后一个
function num_unique(A) {
    const len = array_length(A);
    let count = 0;
    for (let i = 0; i < len; i = i + 1) {
        let last_occurrence = true;
        for (let j = i + 1; j < len; j = j + 1) {
            if (A[j] === A[i]) {
                last_occurrence = false;
            }
        }
        if (last_occurrence) {
            count = count + 1;
        }
    }
    return count;
}
//=====================================================================
// TASK 2A
// 这样写不好，用一个参数表示位数，math_pow(base, 位数-1) * digit
function search_array(A, x) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== x) {
        i = i + 1;
    }
    return i < len ? i : -1;
}
function baseN_to_value(X) {
    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
    const base = head(X);
    const digits = tail(X);
    let value = 0;
    for (let p = digits; !is_null(p); p = tail(p)) {
        value = value * base + search_array(DIGIT_SYMBOLS, head(p));
    }
    return value;
}
//=====================================================================
// TASK 2B
function value_to_baseN(N, x) {
    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
    let remainder = x % N;
    let digits = list(DIGIT_SYMBOLS[remainder]);
    let quotient = math_floor(x / N);
    while (quotient > 0) {
        remainder = quotient % N;
        digits = pair(DIGIT_SYMBOLS[remainder], digits);
        quotient = math_floor(quotient / N);
    }
    return pair(N, digits);
}
// Alternative solution:
function value_to_baseN(N, x) {
    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
    function iter(val, digits) {
        const remainder = DIGIT_SYMBOLS[val % N];
        const quotient = math_floor(val / N);
        return quotient === 0
                ? pair(remainder, digits)
                : iter(quotient, pair(remainder, digits));
    }
    return pair(N, iter(x, null));
}
//=====================================================================
// TASK 3A
function flatten_bin_tree(T) {
    return is_null(T)
    ? null
    : append(flatten_bin_tree(list_ref(T, 1)),
    pair(head(T), flatten_bin_tree(list_ref(T, 2))));
}
//=====================================================================
// TASK 3B
function insert(x, xs) {
    return is_null(xs)
    ? list(x)
    : x <= head(xs)
    ? pair(x, xs)
    : pair(head(xs), insert(x, tail(xs)));
}
function insertion_sort(xs) {
    return is_null(xs)
    ? xs
    : insert(head(xs), insertion_sort(tail(xs)));
}
function list_to_array(L) {
    const A = [];
    let i = 0;
    for (let p = L; !is_null(p); p = tail(p)) {
        A[i] = head(p);
        i = i + 1;
    }
    return A;
}
function make_balanced_BST(L) {
    const sorted_L = insertion_sort(L);
    const A = list_to_array(sorted_L);
    function make_tree(low, high) {
        if (low > high) {
            return null;
        } else {
            const mid = math_ceil((low + high) / 2);
            return list(A[mid],
            make_tree(low, mid - 1),
            make_tree(mid + 1, high));
        }
    }
return make_tree(0, array_length(A) - 1);
}
//=====================================================================
// TASK 3C
function insert(x, xs) {
    return is_null(xs)
    ? list(x)
    : x <= head(xs)
    ? pair(x, xs)
    : pair(head(xs), insert(x, tail(xs)));
}
function insertion_sort(xs) {
    return is_null(xs)
    ? xs
    : insert(head(xs), insertion_sort(tail(xs)));
}
// function flatten_bin_tree(T) {
// return is_null(T)
// ? null
// : append(flatten_bin_tree(list_ref(T, 1)),
// pair(head(T), flatten_bin_tree(list_ref(T, 2))));
// }
function bin_tree_to_BST(T) {
    const L = flatten_bin_tree(T);
    let SL = insertion_sort(L);
    function copy_btree(btree) {
        if (is_null(btree)) {
            return null;
        } else {
            const left = copy_btree(list_ref(btree, 1));
            const entry = head(SL);
            SL = tail(SL);
            const right = copy_btree(list_ref(btree, 2));
            return list(entry, left, right);
        }
    }
    return copy_btree(T);
}
//=====================================================================
