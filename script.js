let p = document.getElementById("playboard");
let r = document.getElementById("ruleboard");

let st = document.getElementById("stonec");
let pr = document.getElementById("paperc");
let sc = document.getElementById("scissorc");
let w = document.getElementById("won");
let t = document.getElementById("tie");
let l = document.getElementById("lost");
let c = 0;
let sr = document.getElementById("scorerule");

function rb() {
    if (r.style.visibility === 'hidden') {
        r.style.visibility = 'visible';
        p.style.visibility = 'hidden';
        st.style.visibility = 'hidden';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'hidden';
        t.style.visibility = 'hidden';
        w.style.visibility = 'hidden';
        l.style.visibility = 'hidden';
        sr.style.visibility = 'visible';
    }
    else {
        r.style.visibility = 'hidden';
        st.style.visibility = 'hidden';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'hidden';
        t.style.visibility = 'hidden';
        w.style.visibility = 'hidden';
        l.style.visibility = 'hidden';
        sr.style.visibility = 'hidden';
    }
}

function pb() {
    if (p.style.visibility === 'hidden') {
        p.style.visibility = 'visible';
        r.style.visibility = 'hidden';
        sr.style.visibility = 'hidden';
    }
    else {
        p.style.visibility = 'hidden';
        st.style.visibility = 'hidden';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'hidden';
        t.style.visibility = 'hidden';
        w.style.visibility = 'hidden';
        l.style.visibility = 'hidden';
    }
}

function Computerchooses1() {
    function hide(){
        st.style.visibility = 'hidden';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'hidden';
        t.style.visibility = 'hidden';
        w.style.visibility = 'hidden';
        l.style.visibility = 'hidden';
    }
    setTimeout(hide,000);
    const min = 1;
    const max = 4;
    const intNumber = Math.floor(Math.random() * (max - min)) + min;
    function SPSChoose() {
        if (intNumber == 1) {
            st.style.visibility = 'visible';
            pr.style.visibility = 'hidden';
            sc.style.visibility = 'hidden';
        }
        else if (intNumber == 2) {
            st.style.visibility = 'hidden';
            pr.style.visibility = 'visible';
            sc.style.visibility = 'hidden';
        }
        else {
            st.style.visibility = 'hidden';
            pr.style.visibility = 'hidden';
            sc.style.visibility = 'visible';
        }
    }
    setTimeout(SPSChoose, 900);
    function result() {
        if (intNumber == 1) {
            document.getElementById("scorepoint").innerHTML = c;
            t.style.visibility = 'visible';
            w.style.visibility = 'hidden';
            l.style.visibility = 'hidden';
        }
        else if (intNumber == 2) {
            document.getElementById("scorepoint").innerHTML = c;
            l.style.visibility = 'visible';
            t.style.visibility = 'hidden';
            w.style.visibility = 'hidden';
        }
        else {
            c++;
            document.getElementById("scorepoint").innerHTML = c;
            w.style.visibility = 'visible';
            t.style.visibility = 'hidden';
            l.style.visibility = 'hidden';
        }
    }
    setTimeout(result, 2000);
}

function Computerchooses2() {
    function hide(){
        st.style.visibility = 'hidden';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'hidden';
        t.style.visibility = 'hidden';
        w.style.visibility = 'hidden';
        l.style.visibility = 'hidden';
    }
    setTimeout(hide,000);
    const min = 1;
    const max = 4;
    const intNumber = Math.floor(Math.random() * (max - min)) + min;
    function SPSChoose() {
        if (intNumber == 1) {
            st.style.visibility = 'visible';
            pr.style.visibility = 'hidden';
            sc.style.visibility = 'hidden';
        }
        else if (intNumber == 2) {
            st.style.visibility = 'hidden';
            pr.style.visibility = 'visible';
            sc.style.visibility = 'hidden';
        }
        else {
            st.style.visibility = 'hidden';
            pr.style.visibility = 'hidden';
            sc.style.visibility = 'visible';
        }
    }
    setTimeout(SPSChoose, 900);
    function result() {
        if (intNumber == 1) {
            c++;
            document.getElementById("scorepoint").innerHTML = c;
            w.style.visibility = 'visible';
            t.style.visibility = 'hidden';
            l.style.visibility = 'hidden';
        }
        else if (intNumber == 2) {
            document.getElementById("scorepoint").innerHTML = c;
            t.style.visibility = 'visible';
            l.style.visibility = 'hidden';
            w.style.visibility = 'hidden';
        }
        else {
            document.getElementById("scorepoint").innerHTML = c;
            l.style.visibility = 'visible';
            w.style.visibility = 'hidden';
            t.style.visibility = 'hidden';
        }
    }
    setTimeout(result, 2000);
}


function Computerchooses3() {
    function hide(){
        st.style.visibility = 'hidden';
        pr.style.visibility = 'hidden';
        sc.style.visibility = 'hidden';
        t.style.visibility = 'hidden';
        w.style.visibility = 'hidden';
        l.style.visibility = 'hidden';
    }
    setTimeout(hide,000);
    const min = 1;
    const max = 4;
    const intNumber = Math.floor(Math.random() * (max - min)) + min;

    function SPSChoose() {
        if (intNumber == 1) {
            st.style.visibility = 'visible';
            pr.style.visibility = 'hidden';
            sc.style.visibility = 'hidden';
        }
        else if (intNumber == 2) {
            st.style.visibility = 'hidden';
            pr.style.visibility = 'visible';
            sc.style.visibility = 'hidden';
        }
        else {
            st.style.visibility = 'hidden';
            pr.style.visibility = 'hidden';
            sc.style.visibility = 'visible';
        }
    }
    setTimeout(SPSChoose, 900);
    function result() {
        if (intNumber == 1) {
            document.getElementById("scorepoint").innerHTML = c;
            t.style.visibility = 'hidden';
            w.style.visibility = 'hidden';
            l.style.visibility = 'visible';
        }
        else if (intNumber == 2) {
            c++;
            document.getElementById("scorepoint").innerHTML = c;
            l.style.visibility = 'hidden';
            t.style.visibility = 'hidden';
            w.style.visibility = 'visible';
        }
        else {
            document.getElementById("scorepoint").innerHTML = c;
            t.style.visibility = 'visible';
            w.style.visibility = 'hidden';
            l.style.visibility = 'hidden';
        }
    }
    setTimeout(result, 2000);
}

function rf() {
    location.reload();
    pb();
}
