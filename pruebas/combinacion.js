let combinacionPosibles;
let codigoColor = ['azul', 'verde', 'amarillo', 'naranja', 'rojo'];
let s1;
let s2;



function factorialN(s1 = 1, n = 16){
    while (n > 1) {
        s1 *= n;
        n--;
    }
    console.log(s1)
}

function factorialNR(n = 16, r = 3){
    s2 = 1;
    let res = (n - r)

    while (res > 1){
        s2 *= res;
        res--;
    }
    console.log(s2);
}

function divisionFactoriales(n1, n2){
    res = n1 / n2;

    console.log(res);
}


factorialN();
factorialNR();
divisionFactoriales(s1, s2);