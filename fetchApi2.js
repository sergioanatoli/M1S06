fetch('https://api.thecatapi.com/v1/images/search?limit=10', {method: "GET"})

.then(response =>{
    if(!response.ok){
        throw new Error('Erro ao carregar as imagens');
    }
    return response.json();
}).then(data =>{
    data.forEach(cat => {
        const url_da_imagem = cat.url;
        document.write(`<img width='200' src='${url_da_imagem}'/> <br />`)
    });
}).catch(error =>{
    console.error("Erro: ", error);
});