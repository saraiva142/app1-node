class Pessoa {
    constructor(
        nome,
        email,
        idade,
        sexo,
        cidade,
        interesses,
        mensagem
    ){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.sexo = sexo;
        this.cidade = cidade;
        this.interesses = interesses;
        this.mensagem = mensagem;
    }
    tostring(){
        return `Nome: ${this.nome}\nEmail: ${this.email}\nIdade: ${this.idade}\nSexo: ${this.sexo}\nCidade: ${this.cidade}\nInteresses: ${this.interesses}\nMensagem: ${this.mensagem}`;
    }
}