import {circle,stack,beside,square,blank,show,beside_frac,stack_frac} from 'rune';


function moony_1(bottom_right,n){
    const left = stack_frac(1/n,circle,square);
    const right = stack_frac(1/n,blank,bottom_right);
    return beside_frac(1/n,left,right);
}


function moony_2(n){
    return n === 1
        ? circle
        : moony_1(moony_2(n-1),n);
}


function moony(n){
    return n === 1
        ? moony_1(circle)
        : beside_frac(1/n,stack_frac(1/n,circle,square),moony(n-1));
}


show(moony_2(3));
