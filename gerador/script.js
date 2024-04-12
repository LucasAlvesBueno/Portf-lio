
    let sliderElement = document.querySelector("#slider");
    let buttonElement = document.querySelector("#button");
    let sizePassword = document.querySelector("#valor");
    let passwordElement = document.querySelector("#password");
    let containerPassword = document.querySelector("#container-password");
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,.<>?/</>"
    let novaSenha = "";
    sizePassword.innerHTML = sliderElement.value;

    sliderElement.oninput = function () {
        sizePassword.innerHTML = this.value;
}


function generatePassword(){

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){

    pass += charset.charAt(Math.floor(Math.random() * n)); //charAt pega um numero com base na posição 0=a 1=b 2=c etc..//

}
containerPassword.classList.remove("hide");
passwordElement.innerHTML = pass;
novaSenha = pass;



}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
        .then(() => {
            alert("Senha copiada com sucesso!");
        })
        .catch((err) => {
            console.error("Erro ao copiar senha:", err);
        });
}