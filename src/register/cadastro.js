let senha = document.getElementById("pass").value
let confirmaSenha = document.getElementById("confiPass".value)

document.getElementById("button").botao.addListener('click', function verificaSenha(){

        if(senha == confirmaSenha) {
                e.preventDefault();
        }
        else {
                alert("Senhas não são iguais")
        }

})
