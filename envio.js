const email = document.getElementById("email");
const senha = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", validar);

function validar() {
  if (email.value === "" || senha.value === "") {
    alert("ERRO! Preencha todos os campos.");
  } 
  else if (senha.value.length < 6) {
    alert("Sua senha tem menos de 6 caracteres.");
  } 
  else {
    alert("Acesso Confirmado!");
  }
}


