let cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
    ];
localStorage.setItem("lista",JSON.stringify(cuentas));

function login(event) {
    event.preventDefault();
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let logged = document.getElementById("logged");
    let auth = false;
    for (let i = 0; i<cuentas.length; i++){
        if (user == cuentas[i].nombre && password == cuentas[i].password){
            //console.log(user + password)
            logged.style.color = "green";
            logged.innerHTML = "<b>Inicio de sesión correcto</b>";
            //console.log("correcto");
            auth = true;
            localStorage.setItem("numUsr",i);
            //usuarioAct = cuentas[i].nombre;
            //console.log(usuarioAct)
            window.location.href = "inicio.html";
        }
    }
    if(auth == false) {
        //alert("Usuario o contraseña incorrectos");
        logged.style.color = "red";
        logged.innerHTML = "<b>Usuario o contraseña incorrectos</b>";
    }
}
console.log(localStorage.getItem("numUsr"))

//let lista = JSON.parse(localStorage.getItem("lista"));
//localStorage.setItem("lista",JSON.stringify(lista));