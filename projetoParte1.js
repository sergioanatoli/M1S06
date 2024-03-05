function consultarEnderecoPorCEP(){
    const cepInformado = prompt('Digite seu CEP');
    if(cepInformado){
        fetch(`https://viacep.com.br/ws/${cepInformado}/json`, {method: "GET"})
        .then(response=>{
            if(!response.ok){
                throw new Error('Erro ao carregar as informacoes')
            }
            return response.json();
        }).then(data=>{
            const enderecoFormatado =
            `${data.logradouro},
             ${data.complemento},
             ${data.barrio},
             ${data.localidade},
             ${data.uf},`;
             alert(enderecoFormatado);

        }).catch(error =>{
            console.error("Error: ", error);
        });

    }else{
        alert('Por favor, digite um CEP valido');
    }
}

consultarEnderecoPorCEP();