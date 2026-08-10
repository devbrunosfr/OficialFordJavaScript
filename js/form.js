
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function Post(form) {
    
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    console.log("Dados do Contato:", data);

    return data;
    }

    function Enviar (event, form) {
    
        event.preventDefault();
        var nome = form.elements.namedItem("nome");

    if(nome.value !== "") {

        let data = Post(form); 
        

        alert('Obrigado sr(a) ' + data.nome + ', os seus dados foram encaminhados com sucesso');
    } else {
        alert('Por favor, preencha o campo em branco.');
    }
}
