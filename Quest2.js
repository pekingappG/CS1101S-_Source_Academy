import { repeat_pattern } from 'rune';
// your helper functions, if needed, go here

// #0 used for x, y test 
// render(union(unit_cylinder,translate(unit_sphere,0,1,0)));

// #1 overlay: put the 2nd shape on the 1st one and 
// the new shape height is 1
function overlay(shape1,shape2){
    return scale(union(translate(shape2,0,0,1),shape1),1,1,0.5);
}

// #2 xbeside: put the 2nd shape beside the 1st on x-postive dirction
// the new shape xlength is 1 
function xbeside(shape1,shape2){
    return scale(union(translate(shape2,1,0,0),shape1),0.5,1,1);
}

// #3 ybeside: put the 2nd shape beside the 1st on y-postive dirction
// the new shape ylength is 1 
function ybeside(shape1,shape2){
    return scale(union(translate(shape2,0,1,0),shape1),1,0.5,1);
}

// #4 base: build the base for for sierpinski
function base(shape){
    const shape1 = xbeside(shape,shape);
    return ybeside(shape1,shape1);
}


function sierpinski(shape) {
    // your program goes here
    const layer = translate(scale(shape,0.5,0.5,1),0.25,0.25,0);
    return overlay(base(shape),layer);
}


function hypofractional(n, shape) {
    // your program goes here
    return repeat_pattern(n,sierpinski,shape);
}

// Testing

//render(sierpinski(unit_pyramid));
//render(sierpinski(unit_cylinder));
//render(hypofractional(3, unit_cube));
render(hypofractional(5, unit_pyramid));



