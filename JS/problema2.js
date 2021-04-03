function validar(e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;

    var crt = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);
    return crt.test(prueba);
}

function calcular(){
    var valor0 = document.formulario.sueldo.value;
    var valor1 = document.formulario.ventas.value;
    var result = parseInt(valor0);
    var mes = parseInt(valor1);
    var comision = (result * mes) * 0.1;
    var total = result + comision;

    document.formulario.comisionn.value = comision + " $";
    document.formulario.sueldoti.value = total + " $";
}

function borrar(){
    document.formulario.cantidad.value = "";
    document.formulario.comisionn.value = "";
    document.formulario.sueldoti.value = "";
}