// helper functions can go here
function iter(initial_num,n,shape_num,shape,process){
    return n === 1
        ? process
        : iter(initial_num,
        n-1,
        shape_num+1,
        shape,
        overlay_frac(1/shape_num,scale_horizontal(shape,(n-1)/initial_num),process)
        );
}
  

function cone(n, shape){
    // your implementation goes here
    return iter(n,n,2,shape,shape);
}

// Tests
render(cone(4, unit_cylinder));



