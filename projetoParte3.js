function consultarEnderecoPorCEP() {
    const realizarConsulta = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar as informacoes');
                }
                return response.json();
            }).then(data => {
                if (data.erro) {
                    throw new Error('CEP nao encontrado');
                }
                const enderecoFormatado = `${data.logradouro}, ${data.complemento}, ${data.bairro}, ${data.localidade}, ${data.uf},`;
                const confirmacao = prompt('Os dados estão corretos?');
                if (confirmacao == "sim") {
                    alert(enderecoFormatado);
                    localStorage.setItem("Endereco", enderecoFormatado);
                } else {
                    alert('Por favor, digite um CEP válido')
                }
            }).catch(error => {
                console.error("Error: ", error);
                alert('Error ao carregar o endereco. Verifique o CEP informado');
            });
    };

    if (localStorage.getItem("Endereco")) {
        const novaConsulta = confirm('Já existe um endereco no banco de dados. Você gostaria de fazer uma nova consulta?');
        if (novaConsulta) {
            const novoCEP = prompt('Digite o novo CEP:');
            if (novoCEP) {
                realizarConsulta(novoCEP);
            } else {
                alert('Por favor, digite um CEP válido');
            }
        }
    } else {
        const cepInformado = prompt('Por favor, digite seu CEP');
        if (cepInformado) {
            realizarConsulta(cepInformado);
        } else {
            alert('Por favor, digite um CEP válido');
        }
    }
}

consultarEnderecoPorCEP();