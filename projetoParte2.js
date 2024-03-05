function consultarEnderecoPorCEP(){
    const cepInformado = prompt('Por favor, digite seu CEP');
    if(cepInformado){
        fetch(`https://viacep.com.br/ws/${cepInformado}/json`, {method: "GET"})
        .then(response=>{
            if(!response.ok){
                throw new Error('Erro ao carregar as informacoes');
            }
            return response.json();
        }).then(data=>{
            if(data.erro){
                throw new Error('CEP nao encontrado');
            }
            const enderecoFormatado =
            `${data.logradouro},
            ${data.complemento},
            ${data.bairro},
            ${data.localidade},
            ${data.uf},`;

            const confirmacao = prompt('Os dados estao corretos?');
            if(confirmacao == "sim"){
                alert(enderecoFormatado);
                localStorage.setItem("Endereco", enderecoFormatado);
            }else{
                alert('Por favor, digite um CEP valido')
            }
        }).catch(error=>{
            console.error("Error: ", error);
            alert('Error ao carregar o endereco. Verifique o CEP informado');
        })
    }else{
        alert('Por favor, digite um CEP valido')
    }
}

consultarEnderecoPorCEP();