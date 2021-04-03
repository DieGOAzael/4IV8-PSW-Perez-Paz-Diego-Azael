  
function validar(e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;

    var crt = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);
    return crt.test(prueba);
}

function calcular(){
    var v0 = document.formulario.examen_1.value;
    var v1 = document.formulario.examen_2.value;
    var v2 = document.formulario.examen_3.value;
    var valor1 = document.formulario.examen_final.value;
    var valor2 = document.formulario.trabajo_final.value;
    var valor_a = parseInt(v0);
    var valor_ab = parseInt(v1);
    var valor_ac = parseInt(v2);
    var valor_b = parseInt(valor1);
    var valor_c = parseInt(valor2);
    var promedio_examen = (valor_a + valor_ab + valor_ac)/3;
    var promedio = (promedio_examen * 0.55) + (valor_b * 0.30) + (valor_c * 0.15);

    document.formulario.promedio_final.value = promedio;
}

function borrar(){
    document.formulario.examen_1.value = "";
    document.formulario.examen_2.value = "";
    document.formulario.examen_3.value = "";
    document.formulario.examen_final.value = "";
    document.formulario.trabajo_final.value = "";
    document.formulario.promedio_final.value = "";
}