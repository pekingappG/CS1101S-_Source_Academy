import {heart,circle,rcross,stack,beside,stack_frac,beside_frac,
    quarter_turn_left,quarter_turn_right,turn_upside_down,make_cross,show,stackn
} from 'rune';

function persian(rune, count) {
    // your answer here
    const step0 =  stack(beside(quarter_turn_right(rune),turn_upside_down(rune)),
    beside(rune,quarter_turn_left(rune)));
    function besiden(rune,n){
    return n <= 1
        ? rune 
        : beside_frac(1/n,rune,besiden(rune,n-1));
    }
    
    const step1 = stack_frac(1/count,besiden(rune,count-2),
    stack_frac((count-2)/(count-1),step0,besiden(rune,count-2)));
    
    const step2 = beside_frac(1/count,stackn(count,rune),
    beside_frac((count-2)/(count-1),step1,stackn(count,rune)));
    
    return step2;
}



// Tests
show(persian(heart, 7));
