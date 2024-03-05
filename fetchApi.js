fetch("data.json").then(response=>{
    if(!response.ok){
        throw new Error('Não foi possível carregar o arquivo JSON');
    }
    return response.json()
}).then(data =>{
    console.log(data);
}).catch(error=>{
    console.error("Error: ", error);
})