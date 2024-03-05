function informacoesUsuario(){
    const nomeUsuario = prompt("Escreva seu nome: ");
    const idadeUsuario = prompt("Escreva sua idade: ");
    const emailUsuario = prompt("Escreva seu email: ");

    const data = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        email: emailUsuario
    };

    const dataString = JSON.stringify(data);

    localStorage.setItem("user", dataString)
};

informacoesUsuario();