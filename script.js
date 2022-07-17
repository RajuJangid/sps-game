let p = document.getElementById("playboard");
let r = document.getElementById("ruleboard");

let st = document.getElementById("stonec");
let pr = document.getElementById("paperc");
let sc = document.getElementById("scissorc");
let w = document.getElementById("won");
let t = document.getElementById("tie");
let l = document.getElementById("lost");

function rb(){
    if(r.style.visibility === 'hidden'){
        r.style.visibility = 'visible';
        p.style.visibility = 'hidden';
    }
    else{
        r.style.visibility = 'hidden';
    }
}

function pb(){
    if(p.style.visibility === 'hidden'){
        p.style.visibility = 'visible';
        r.style.visibility = 'hidden';
    }
    else{
        p.style.visibility = 'hidden';
        st.style.visibility = 'hidden';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'hidden';
        t.style.visibility = 'hidden';
        w.style.visibility = 'hidden';
        l.style.visibility = 'hidden';
    }
}

function Computerchooses1(){
const min = 1;
const max = 4;
const intNumber = Math.floor(Math.random() * (max - min)) + min;
if(intNumber == 1){
    st.style.visibility = 'visible';
    pr.style.visibility = 'hidden';
    sc.style.visibility = 'hidden';
    t.style.visibility = 'visible';
    w.style.visibility = 'hidden';
    l.style.visibility = 'hidden';

}
else if(intNumber == 2){
    st.style.visibility = 'hidden';
    pr.style.visibility = 'visible';
    sc.style.visibility = 'hidden';
    l.style.visibility = 'visible';
    t.style.visibility = 'hidden';
    w.style.visibility = 'hidden';
}
else{
    st.style.visibility = 'hidden';
    pr.style.visibility = 'hidden';
    sc.style.visibility = 'visible';
    w.style.visibility = 'visible';
    t.style.visibility = 'hidden';
    l.style.visibility = 'hidden';
}
}

function Computerchooses2(){
    const min = 1;
    const max = 4;
    const intNumber = Math.floor(Math.random() * (max - min)) + min;
if(intNumber == 1){
        st.style.visibility = 'visible';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'hidden';
        w.style.visibility = 'visible';
        t.style.visibility = 'hidden';
        l.style.visibility = 'hidden';
    
    }
    else if(intNumber == 2){
        st.style.visibility = 'hidden';
        pr.style.visibility = 'visible';
        sc.style.visibility = 'hidden';
        t.style.visibility = 'visible';
        l.style.visibility = 'hidden';
        w.style.visibility = 'hidden';
    }
    else{
        st.style.visibility = 'hidden';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'visible';
        l.style.visibility = 'visible';
        w.style.visibility = 'hidden';
        t.style.visibility = 'hidden';
    }
}

function Computerchooses3(){
        const min = 1;
        const max = 4;
        const intNumber = Math.floor(Math.random() * (max - min)) + min;        
        if(intNumber == 1){
            st.style.visibility = 'visible';
            pr.style.visibility = 'hidden';
            sc.style.visibility = 'hidden';
            t.style.visibility = 'hidden';
            w.style.visibility = 'hidden';
            l.style.visibility = 'visible';
        
        }
        else if(intNumber == 2){
            st.style.visibility = 'hidden';
            pr.style.visibility = 'visible';
            sc.style.visibility = 'hidden';
            l.style.visibility = 'hidden';
            t.style.visibility = 'hidden';
            w.style.visibility = 'visible';
        }
        else{
            st.style.visibility = 'hidden';
            pr.style.visibility = 'hidden';
            sc.style.visibility = 'visible';
            t.style.visibility = 'visible';
            w.style.visibility = 'hidden';
            l.style.visibility = 'hidden';
        }
    }    


function rf(){
    location.reload();
    pb(); 
}