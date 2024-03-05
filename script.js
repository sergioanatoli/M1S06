// let promise = new Promise((resolve,reject) => {
//     let deuCerto = false;
//     if(deuCerto == true){
//         reject("Ops, deu falha")
//     }else{
//         resolve("Deu sucesso")
//     }
// });

// promise.then((mensagem) =>{
//     document.write("Mensagem sucesso: "+ mensagem);
// })
// .cath((erro)=>{
//     document.write("Mensagem erro: " + erro);
// })

// let promise = new Promise((resolve, reject) => {
//     let agora = true;
//     if(agora == false){
//         reject("Ops, deu falha");
//     }else{
//         resolve("Deu certo");
//     }
// });

// promise.then((mensagem)=>{
//     document.write("Mensagem sucesso: " + mensagem);
// })
// .catch((erro) =>{
//     document.write("Mensagem erro: " + erro);
// })

// let promise = new Promise((resolve,reject) =>{
//     let alright = true;
//     if( alright == false){
//         reject("Que fue mamabicho");
//     }else{
//         resolve("Pira de aqui huelebolas");
//     }
// });

// promise.then((mensagem)=>{
// document.write("Mensaje de exito: " + mensagem)
// })
// .catch((error) =>{
//     document.write("Mensaje de error: " + error)
// });

// let promise = new Promise((resolve,reject) => {
//     let deuCerto = true;
//     if(deuCerto == true){
//         resolve("Resolve")
//     }else{
//         reject("Reject")
//     }
// });

// promise.then((mensaje)=>{
//     document.write(mensaje)
// })
// .catch((erro)=>{
//     document.write(erro)
// })

// let promise = new Promise((resolve,reject) => {
//     let numero = 3;
//     if(numero % 2 == 0){
//         resolve("O numero validado e par")
//     }else{
//         reject("Error: o numero informado e impar")
//     }
// });

// promise
// .then((mensaje) =>{
//     document.write(mensaje);
// })
// .catch((erro) =>{
//     document.write(erro)
// });

// function getUserInfo(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             const userInfo = {
//                 nome: "Sergio Anatoli",
//                 idade: 30,
//                 email: "sergio@gmail.com",
//             };
//         resolve(userInfo);
//      }, 2000);
//     });
// }

// async function exibirUserInfo(){
//     try{
//         const userInfo = await getUserInfo();
//         console.log("Informacoes do usuario: ");
//         console.log("Nome: ", userInfo.nome);
//         console.log("Idade: ", userInfo.idade);
//         console.log("Email: ", userInfo.email);
//     }
//     catch(error){
//         console.error("Ocorreu um erro ao obter as informações do usuário: ", error);

//     }
// }

// exibirUserInfo();

// function getUserInfo(){
//     return new Promise((resolve,reject) => {
//         setInterval(() => {
//             const userInfo = {
//                 nome: "Sergio Anatoli",
//                 idade: 30,
//                 email: "sergio@email.com",
//             };
//             resolve(userInfo);
//         }, 2000);
//     });
// }

// async function exibirUserInfo(){
//     try{
//         const userInfo = await getUserInfo();
//         console.log("Nome: ", userInfo.nome);
//         console.log("Idade: ", userInfo.idade);
//         console.log("Email: ", userInfo.email);
//     }
//     catch(error){
//         console.error("Ocorreu um erro ao obter as informações do usuário: ", error);
//     }
// }

// exibirUserInfo();

// function getUserInfo(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             const userInfo = {
//                 nome: "Sergio",
//                 idade: 30,
//                 email: "sergio@gmail.com",
//             }
//             resolve(userInfo);
//         }, 2000);
//     });
// }

// async function exibirUserInfo(){
//     try{
//         const userInfo = await getUserInfo();
//         console.log("Nome: ", userInfo.nome);
//         console.log("Idade: ", userInfo.idade);
//         console.log("Email: ", userInfo.email);
//     }
//     catch(error){
//         console.error("Ocorreu um erro ao obter as informacoes do usuario: ", error);
//     }
// }

// exibirUserInfo();

// function getUserInfo(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const userInfo = {
//                 nome: "Sergio",
//                 idade: 30,
//                 email: "sergio@gmail.com"
//             }
//             resolve(userInfo);
//         }, 2000);
//     });
// }

// async function exibirUserInfo(){
//     try{
//         const userInfo = await getUserInfo();
//         console.log(userInfo.name);
//         console.log(userInfo.idade);
//         console.log(userInfo.email);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// exibirUserInfo();



// LOCAL STORAGE
// // let nameUser = "LA VIDA BOHEME";
// // let idade = 1050;

// localStorage.setItem("name", "Los Mesoneros")
// localStorage.setItem("name", "Viniloversus")
// localStorage.setItem("idade", 23)
// localStorage.setItem("Esta ativo", true)


// let nameUser = localStorage.getItem("name");
// console.log(nameUser);

// let idadeUser = localStorage.getItem("idade");
// console.log(parseInt(idadeUser));

// localStorage.removeItem("Esta ativo")

// let options = {
//     method: 'GET'
// };

// fetch('https://pokeapi.co/api/v2/pokemon/mew', options)
// .then((responseFetch)=>{
//     return responseFetch.json();
// })

// .then((responseApi)=>{
    
//     let url = responseApi.sprites.front_default
//     document.write(`<h1>${responseApi.name}</h1>`);
//     document.write(`<img src='${url}'/>`);
    
// })

// .catch(()=>{

// })


// fetch("data.json").then(response =>{
//     if(!response.ok){
//         throw new Error('No se pudo cargar el archivo JSON');}
//         return response.json()}).then(data=>{
//             console.log(data);}).catch(error=>{
//                 console.error('Error: ', error);
//             });

            


// fetch("data.json").then(response=>{
//     if(!response.ok){
//         throw new Error('No se pudo cargar el archivo JSON')
//     };
//     return response.json()
// }).then(data =>{
//     console.log(data);
// }).catch(error=>{
//     console.error('Error: ', error);
// });

// fetch("data.json").then(response=>{
//     if(!response.ok){
//         throw new Error('No se pudo cargar el archivo JSON')
//     };
//     return response.json()
// }).then(data =>{
//     console.log(data);
// }).catch(error=>{
//     console.log("Error: ", error);
// });

// fetch("data.json").then(response=>{
//     if(!response.ok){
//         throw new Error('Não foi possível carregar o arquivo JSON');
//     }
//     return response.json()
// }).then(data =>{
//     console.log(data);
// }).catch(error=>{
//     console.error("Error: ", error);
// })

// function informacoes(){
//     const nomeUsuario = prompt("Escreva seu nome: ");
//     const idadeUsuario = prompt("Escreva sua idade: ");
//     const emailUsuario = prompt("Escreva seu email: ");

//     const data = {
//         nome: nomeUsuario,
//         idade: idadeUsuario,
//         email: emailUsuario
//     };

//     const dataString = JSON.stringify(data);

//     localStorage.setItem("user", dataString);
// }

// informacoes();

// function informacoesUsuario(){
//     const nomeUsuario = prompt("Escreva seu nome: ");
//     const idadeUsuario = prompt("Escreva sua idade: ");
//     const emailUsuario = prompt("Escreva seu email: ");

//     const data = {
//         nome: nomeUsuario,
//         idade: idadeUsuario,
//         email: emailUsuario
//     };

//     const dataString = JSON.stringify(data);

//     localStorage.setItem("user", dataString)
// };

// informacoesUsuario();

// fetch("https://pokeapi.co/api/v2/pokemon/charizard", {method :"GET"})

// .then((responseFetch) =>{
//     return responseFetch.json();
// })

// .then((responseApi)=>{
//     document.write(`<h1> ${responseApi.name}</h1>`)
//     document.write(`<img src="${responseApi.sprites.front_default}"/img>`)
//     document.write(`<p> ${responseApi.abilities[0].ability.name}</p>`)
// })

// async function fetchPokemon(){
// const request = await fetch("https://pokeapi.co/api/v2/pokemon/gengar", {method : "GET"});
// const data = await request.json();
// return data;
// }

// fetch('https://api.thecatapi.com/v1/images/search?limit=10', {method: "GET"})

// .then(response =>{
//     if(!response.ok){
//         throw new Error('Erro ao carregar as imagens');
//     }
//     return response.json();
// }).then(data =>{
//     data.forEach(cat => {
//         const url_da_imagem = cat.url;
//         document.write(`<img width='200' src='${url_da_imagem}'/> <br />`)
//     });
// }).catch(error =>{
//     console.error("Erro: ", error);
// });

// fetch('https://api.thecatapi.com/v1/images/search?limit=10', {method: "GET"})

// .then(response =>{
//     if(!response.ok){
//         throw new Error('Erro ao carregar as imagens');
//     }
//     return response.json();
// }).then(data=>{
//     data.forEach(cat => {
//         const url_da_imagem = cat.url;
//         document.write(`<img width='200' src='${url_da_imagem}'/> <br />`)
//     });
    
// }).catch(error =>{
//     console.error("Error: ", error);
// })

// fetch('https://api.thecatapi.com/v1/images/search?limit=10', {method: "GET"})
// .then(response=>{
//     if(!response.ok){
//         throw new Error("Erro ao carregar as imagens");
//     }
//     return response.json();
// }).then(data=>{
//     data.forEach(cat => {
//         const url_da_imagem = cat.url;
//         document.write(`<img width='200' src='${url_da_imagem}'/> <br />`)
//     });
// }).catch(error =>{
//     console.error("Error: ", error);
// })
// -------------------------------------------
// fetch('viacep.com.br/ws/01001000/json/', {method: "GET"})
// .then(response =>{
//     if(!response.ok){
//         throw new Error('Erro ao carregar as informacaoes');
//     }
//     return response.json();
// }).then(data=>{
//     function cepUsuario(){
//         const cep_informado = prompt('Digite seu CEP');
//         if(cep_informado == ""){
//             logradouroUsuario: data.logradouro;
//             complementoUsuario: data.complemento;
//             bairroUsuario: data.bairro;
//             localidadeUsuario: data.localidade

//         }
//     }
// }).catch(error=>{
//     console.error("Error: error");
// })
// cepUsuario();
// --------------------------------------------

// function consultarEnderecoPorCEP(){
//     const cepInformado = prompt('Digite seu CEP');
//     if(cepInformado){
//         fetch(`https://viacep.com.br/ws/${cepInformado}/json`, {method: "GET"})
//         .then(response=>{
//             if(!response.ok){
//                 throw new Error('Erro ao carregar as informacoes')
//             }
//             return response.json();
//         }).then(data=>{
//             const enderecoFormatado = 
//             `${data.logradouro},
//              ${data.complemento},
//              ${data.bairro},
//              ${data.localidade},
//              ${data.uf},`;
//              alert(enderecoFormatado);

//         }).catch(error =>{
//             console.error("Error: ", error);
//         });

//     }else{
//         alert('Por favor, digite um CEP valido');
//     }
// }

// consultarEnderecoPorCEP();





// function consultarEnderecoPorCEP(){
//     if(localStorage.getItem("Endereco")){
//         const novaConsulta = 
//         confirm('Já existe um endereco no banco de dados, você gostaria de fazer uma nova consulta?');
//         if(novaConsulta){
//             const novoCEP = prompt('Digite o novo CEP:');
//             if(novoCEP){
//                 fetch(`https://viacep.com.br/ws/${novoCEP}/json`, {method: "GET"})
//         .then(response=>{
//             if(!response.ok){
//                 throw new Error('Erro ao carregar as informacoes');
//             }
//             return response.json();
//         }).then(data=>{
//             if(data.erro){
//                 throw new Error('CEP nao encontrado');
//             }
//             const enderecoFormatado =
//             `${data.logradouro},
//             ${data.complemento},
//             ${data.bairro},
//             ${data.localidade},
//             ${data.uf},`;

//             const confirmacao = prompt('Os dados estao corretos?');
//             if(confirmacao == "sim"){
//                 alert(enderecoFormatado);
//                 localStorage.setItem("Endereco", enderecoFormatado);
//             }else{
//                 alert('Por favor, digite um CEP valido')
//             }


//         }).catch(error=>{
//             console.error("Error: ", error);
//             alert('Error ao carregar o endereco. Verifique o CEP informado');
//         })
//     }else{
//         alert('Por favor, digite um CEP valido')
//     }
//     }
//             }
       

//     const cepInformado = prompt('Por favor, digite seu CEP');
//     if(cepInformado){
//         fetch(`https://viacep.com.br/ws/${cepInformado}/json`, {method: "GET"})
//         .then(response=>{
//             if(!response.ok){
//                 throw new Error('Erro ao carregar as informacoes');
//             }
//             return response.json();
//         }).then(data=>{
//             if(data.erro){
//                 throw new Error('CEP nao encontrado');
//             }
//             const enderecoFormatado =
//             `${data.logradouro},
//             ${data.complemento},
//             ${data.bairro},
//             ${data.localidade},
//             ${data.uf},`;

//             const confirmacao = prompt('Os dados estao corretos?');
//             if(confirmacao == "sim"){
//                 alert(enderecoFormatado);
//                 localStorage.setItem("Endereco", enderecoFormatado);
//             }else{
//                 alert('Por favor, digite um CEP valido')
//             }


//         }).catch(error=>{
//             console.error("Error: ", error);
//             alert('Error ao carregar o endereco. Verifique o CEP informado');
//         })
//     }else{
//         alert('Por favor, digite um CEP valido')
//     }
//     }


// consultarEnderecoPorCEP();



// function consultarEnderecoPorCEP() {
//     const realizarConsulta = (cep) => {
//         fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Erro ao carregar as informacoes');
//                 }
//                 return response.json();
//             }).then(data => {
//                 if (data.erro) {
//                     throw new Error('CEP nao encontrado');
//                 }
//                 const enderecoFormatado = `${data.logradouro}, ${data.complemento}, ${data.bairro}, ${data.localidade}, ${data.uf},`;
//                 const confirmacao = prompt('Os dados estão corretos?');
//                 if (confirmacao == "sim") {
//                     alert(enderecoFormatado);
//                     localStorage.setItem("Endereco", enderecoFormatado);
//                 } else {
//                     alert('Por favor, digite um CEP válido')
//                 }
//             }).catch(error => {
//                 console.error("Error: ", error);
//                 alert('Error ao carregar o endereco. Verifique o CEP informado');
//             });
//     };

//     if (localStorage.getItem("Endereco")) {
//         const novaConsulta = confirm('Já existe um endereco no banco de dados. Você gostaria de fazer uma nova consulta?');
//         if (novaConsulta) {
//             const novoCEP = prompt('Digite o novo CEP:');
//             if (novoCEP) {
//                 realizarConsulta(novoCEP);
//             } else {
//                 alert('Por favor, digite um CEP válido');
//             }
//         }
//     } else {
//         const cepInformado = prompt('Por favor, digite seu CEP');
//         if (cepInformado) {
//             realizarConsulta(cepInformado);
//         } else {
//             alert('Por favor, digite um CEP válido');
//         }
//     }
// }

// consultarEnderecoPorCEP();




// function getUserInfo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const userInfo = {
//                 nome: 'Sergio',
//                 idade: 30,
//                 email: 'sergio@gmail.com'
//             }
//             resolve(userInfo);
//         }, 2000);
//     });
// }

// async function exibirUserInfo(){
//     try{
//         const userInfo = await getUserInfo();
//         console.log(userInfo.nome);
//         console.log(userInfo.idade);
//         console.log(userInfo.email);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// exibirUserInfo();

// function getUserInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const userInfo = {
//                 nome: "Sergio Anatoli",
//                 idade: 30,
//                 email: "sergio@gmail.com"
//             }
//             resolve(userInfo)
//         }, 3000);
//     });
// }

// async function exibirUserInfo(){
//     try{
//         const userInfo = await getUserInfo();
//         console.log(userInfo.nome);
//         console.log(userInfo.idade);
//         console.log(userInfo.email);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// exibirUserInfo();
// function getUserInfo(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const userInfo = {
//                 nome: "Sergio",
//                 idade: 30,
//                 email: "sergio@gmail.com"
//             }
//             resolve(userInfo);
//         }, 2000);
//     });
// }

// async function exibirUserInfo(){
//     try{
//         const userInfo = await getUserInfo();
//         console.log(userInfo.name);
//         console.log(userInfo.idade);
//         console.log(userInfo.email);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// exibirUserInfo();
