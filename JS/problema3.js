function validar(e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;

    var crt = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);
    return crt.test(prueba);
}

function calcular(){
    var num= document.formulario.compra.value;
    var num_a = parseInt(num);
    var final = num_a * 0.15;

    document.formulario.final.value = (num_a - final) + " $";
    document.formulario.final_descuento.value = final + " $";
}

function borrar(){
    document.formulario.compra.value = "";
    document.formulario.final.value = "";
    document.formulario.final_descuento.value = "";
}