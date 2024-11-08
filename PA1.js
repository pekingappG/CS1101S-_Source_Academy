// important 
// permutation, Infinity


//===============================================================
// TASK 1A
//===============================================================
function make_k_list(k, d) {
    if (d === 0) {
        return 0;
    } else {
        let klist = null;
        for (let i = 0; i < k; i = i + 1) {
            klist = pair(make_k_list(k, d - 1), klist);
        }
        return klist;
    }
}
//===============================================================
// TASK 1B
//===============================================================
function sum_k_list(klist) {
    if (is_number(klist)) {
        return klist;
    } else {
        const k = length(klist);
        let sum = 0;
        let rest = klist;
        for (let i = 0; i < k; i = i + 1) {
            sum = sum + sum_k_list(head(rest));
            rest = tail(rest);
        }
        return sum;
    }
}
//===============================================================
// TASK 1C
//===============================================================
function map_k_list(f, klist) {
    if (is_number(klist)) {
        return f(klist);
    } else {
    const k = length(klist);
    let result = null;
    let rest = klist;
    for (let i = 0; i < k; i = i + 1) {
        result = pair(map_k_list(f, head(rest)), result);
        rest = tail(rest);
    }
    return reverse(result);
    }
}
//===============================================================
// TASK 2A
//===============================================================
function route_distance(mat, route) {
    function add_dist(rou) {
        if (is_null(rou) || is_null(tail(rou))) {
            return 0;
        } else {
        return mat[head(rou)][head(tail(rou))] + add_dist(tail(rou));
        }
    }
    return add_dist(route);
}
//===============================================================
// TASK 2B
//===============================================================
function shortest_paper_route(n, mat, start) {
// You can keep, modify or remove the permutations function.
    function permutations(ys) {
        return is_null(ys)
        ? list(null)
        : accumulate(append, null,
        map(x => map(p => pair(x, p),
        permutations(remove(x, ys))),
        ys));
    }
    const others = remove(start, enum_list(0, n - 1));
    const routes = permutations(others);
    let min_dist = Infinity;
    let min_route = null;
    for (let p = routes; !is_null(p); p = tail(p)) {
        const pp_route = pair(start, append(head(p), list(start)));
        const route_dist = route_distance(mat, pp_route);
        if (route_dist < min_dist) {
        min_dist = route_dist;
        min_route = pp_route;
        } else { }
    }
    return pair(min_route, min_dist);
}
//===============================================================
// TASK 3A
//===============================================================
function make_postfix_exp(bae) {
    const pfe = [];
    let next = 0;
    function convert(sub_bae) {
        if (is_number(sub_bae)) {
            pfe[next] = sub_bae;
            next = next + 1;
        } else {
            convert(sub_bae[0]);
            convert(sub_bae[2]);
            pfe[next] = sub_bae[1];
            next = next + 1;
        }
    }
    convert(bae);
    return pfe;
}
//===============================================================
// TASK 3B
//===============================================================
function eval_postfix_exp(pfe) {
    let stash = null;
    function push(x){
        stash = pair(x, stash);
    }
    
    function pop(){
        const x = head(stash);
        stash = tail(stash);
        return x;
    }
    for (let i = 0; i ‹ array_ length(pfe); i = i+1){
        push(is_number(pfe[i])? pfe[i]
            : pfe[i] === '+' ? pop() + pop()
            : pfe[i] === '-' ? -pop() + pop()
            : pfe[i] === '*' ? pop() * pop()
            : (1/pop()) * pop()
        );
    }
    return pop();
}




















