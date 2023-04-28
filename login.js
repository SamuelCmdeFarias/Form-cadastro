function Cadastrar(){
    
    let nome = document.getElementById('loginNome').value;
    let datanasc = document.getElementById('loginData').value;
    let telefone = document.getElementById('loginTelefone').value;

    if(!nome || !datanasc || !telefone){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }
    else{
        alert("Campos preenchidos com sucesso!");
    }

    
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    let senhaconfirm = document.getElementById('loginSenhaConfirm').value;

    
    if(!email || !senha || !senhaconfirm){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }
    else{
        alert("Campos preenchidos com sucesso!");
    }

    
    let endereco = document.getElementById('loginEndereco').value;
    let cpf = document.getElementById('loginCPF').value;

    
    if(!endereco || !cpf){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }
    else{
        alert("Campos preenchidos com sucesso!");
    }
    
    let numero = document.getElementById('loginNumero').value;
    let bairro = document.getElementById('loginBairro').value;
    let cidade = document.getElementById('loginCidade').value;
    let estado = document.getElementById('loginEstado').value;


    if(!numero || !bairro || !cidade || !estado){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }
    else{
        alert("Campos preenchidos com sucesso!");
    }
    
    let complemento = document.getElementById('loginComplemento').value;
    let pontoDeRef = document.getElementById('loginPontoDeRef').value;


    if(!complemento || pontoDeRef){

    }
    else{
        alert("Campos preenchidos com sucesso!");
    }
}
