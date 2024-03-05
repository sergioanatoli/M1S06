
let promise = new Promise((resolve,reject) => {
    let numero = 3;
    if(numero % 2 == 0){
        resolve("O numero validado e par")
    }else{
        reject("Error: o numero informado e impar")
    }
});

promise
.then((mensaje) =>{
    document.write(mensaje);
})
.catch((erro) =>{
    document.write(erro)
});