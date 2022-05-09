document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" && 
    document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as informações por e-mail!")
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}
