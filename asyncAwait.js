function getUserInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userInfo = {
                nome: 'Sergio',
                idade: 30,
                email: 'sergio@gmail.com'
            }
            resolve(userInfo);
        }, 2000);
    });
}

async function exibirUserInfo(){
    try{
        const userInfo = await getUserInfo();
        console.log(userInfo.nome);
        console.log(userInfo.idade);
        console.log(userInfo.email);
    }
    catch(error){
        console.error(error);
    }
}

exibirUserInfo();