function validar(e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;

    var crt = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);
    return crt.test(prueba);
}

function calcular(){
    var v1 = document.formulario.año_actual.value;
    var v2 = document.formulario.año_nacer.value;
    var v3 = parseInt(v1);
    var v4 = parseInt(v2);
    var final = v3 - v4;
    if (v3 <= v4) {
        window.alert("Año no válido.");
    } else {
        document.formulario.final.value = final + " años";
    }
}

function borrar(){
    document.formulario.año_actual.value = "";
    document.formulario.año_nacer.value = "";
    document.formulario.final.value = "";
}