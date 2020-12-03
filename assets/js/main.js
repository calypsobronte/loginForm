const dates = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

dates.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

function validate() {
  let user = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let accept = document.getElementById("acepto").checked;

  if (
    user == "codelinamaria@gmail.com" &&
    pass == "123456789" &&
    accept == true
  ) {
    alert("bienvenido");
    window.location.href = "botones.html";
  } else if (user == "" || pass == "" || accept == false) {
    alert("debes de ingresar los datos validos para iniciar sesion");
  } else {
    alert("Revisa que esten ingresando correctamente correo/contraseña");
  }
}

function inicio() {
  window.location.href = "index.html";
}
