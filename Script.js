function validar(){
    var valor = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;
    console.log(validar);
    if(valor.length > 2){
     alert("Digite dois numeros");
     document.formulario.numero.focus();
     return false;
    }
    else if (nomeValor.length < 3){
        alert("noem maior");
        return false;
    }
    else{
        alert("enviou");
        return false;
    }
}