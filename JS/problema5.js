function validar(e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;

    var crt = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);
    return patron.test(crt);
}

function calcular(){
    var v0 = document.formulario.num_chlopcy.value;
    var v1 = document.formulario.num_dziewczynki.value;
    var v2 = parseInt(v0);
    var v3 = parseInt(v1);
    var vp = v2 + v3;
    var porcentaje1 = (v2/vp) * 100;
    var porcentaje2 = (v3/vp) * 100;

    document.formulario.final_chlopcy.value = porcentaje1 + " %";
    document.formulario.final_dziewczynki.value = porcentaje2 + " %";
}

function borrar(){
    document.formulario.num_chlopcy.value = "";
    document.formulario.num_dziewczynki.value = "";
    document.formulario.final_chlopcy.value = "";
    document.formulario.final_dziewczynki.value = "";
}