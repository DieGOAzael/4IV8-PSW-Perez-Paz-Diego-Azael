function validar(e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;

    var crt = /[0-9\d .]/;

    var prueba = String.fromCharCode(entrada);
    return crt.test(prueba);
}

function calcular(){
    var v0 = document.formulario.num_1.value;
    var v1 = document.formulario.num_2.value;
    var valor_a = parseInt(v0);
    var valor_b = parseInt(v1);
    
    if (valor_a == valor_b) {
        var ope = valor_a * valor_b;
    } else if (valor_a > valor_b) {
        var ope = valor_a - valor_b;
    } else {
        var ope = valor_a + valor_b;
    }

    document.formulario.final_num.value = ope;
}

function borrar(){
    document.formulario.num_1.value = "";
    document.formulario.num_2.value = "";
    document.formulario.final_num.value = "";
}