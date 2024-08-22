import {heart,circle,rcross,stack,beside,stack_frac,beside_frac,
    quarter_turn_left,quarter_turn_right,turn_upside_down,make_cross,
    show,stackn,square,blank
    
} from 'rune';
function hook(frac) {
    // your answer here
    return frac === 1
        ? square
        : frac === 0
        ? stack(square,blank)
        : stack(square,beside_frac(1-frac,blank,square));
}




const base_pic0 = hook(1/10);
const base_pic1 = quarter_turn_right(base_pic0);
const base_pic2 = quarter_turn_right(base_pic1);
const base_pic3 = quarter_turn_right(base_pic2);
/**
show(base_pic0);
show(base_pic1);
show(base_pic2);
show(base_pic3);

**/

const pic1 = stack_frac(1/5,base_pic0,base_pic1);
show(pic1);
const pic2 = beside_frac(4/5,base_pic2,base_pic1);

const pic3 = stack_frac(1/5,base_pic0,pic2);

const pic4 = stack_frac(4/5,beside_frac(1/5,base_pic3,blank),base_pic2);

show(pic4);


function spiral(thickness,depth){
    return depth === 0
        ? blank
        : depth % 4 === 1
        ? stack_frac(thickness,base_pic0,spiral(thickness,depth-1))
        : depth % 4 === 2
        ? 
    
}

//应该用循环去写 不要考虑什么几把recursion了











