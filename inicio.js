//Obtener elementos del local storage guardados a partir del login
let lista = JSON.parse(localStorage.getItem("lista"));
let numUsr = localStorage.getItem("numUsr");

let mov = document.getElementById("mov");
let listMov = [];
let error = document.getElementById("mensajeError");
let opciones = document.getElementById("opciones");
let listOpc = [];

//Obtener y pintar nombre de usuario
let usrAct = document.getElementById("usr_act")
usrAct.innerText = lista[numUsr].nombre;

//Obtener y pintar saldo
let total = document.getElementById("saldo");
total.innerText = "$" + lista[numUsr].saldo;

let ingresar = document.getElementById("ingreso");
let retirar = document.getElementById("retiro");

function ingreso(){
    let nuevoSaldo = lista[numUsr].saldo + parseInt(ingresar.value);
    if(nuevoSaldo > 990){
        error.innerHTML = '<div id="error" class="alert alert-danger" role="alert">Monto límite superado, no puedes tener mas de $990</div>';
    }
    else{
        lista[numUsr].saldo = nuevoSaldo;
        localStorage.setItem("lista",JSON.stringify(lista));
        tipoMov = "Ingreso";
        movimiento();
        location.reload();
    }
};

function retiro(){
    let nuevoSaldo = lista[numUsr].saldo - parseInt(retirar.value);
    if(nuevoSaldo < 10){
        error.innerHTML = '<div id="error" class="alert alert-danger" role="alert">Lo sentimos no puedes tener menos de $10 en tu cuenta </div>';
    }
    else{
    console.log(nuevoSaldo);
    lista[numUsr].saldo = nuevoSaldo;
    localStorage.setItem("lista",JSON.stringify(lista));
    tipoMov = "Retiro";
    movimiento();
    location.reload();
    }
};

function transferir(){
    for (let i = 0; i<lista.length; i++){
        if(lista[i].nombre != lista[numUsr].nombre){
            console.log(lista[i]);
            opc = "<option>" + lista[i].nombre + "</option>";
            listOpc.push(opc)
        }
        opciones.innerHTML = listOpc;
    }
}

function realizarTrans(){
    
}

let fecha = new Date();
let year = fecha.getFullYear();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; 
let fech = dia + "/" + mes + "/" + year;

function movimiento(){
if(tipoMov == "Ingreso"){
    movi= "<tr>" + 
    "<td>" + fech + "</td>" +
    "<td>" + tipoMov + "</td>" +
    "<td>" + ingresar.value + "</td>" +
    "</tr>";
    listMov.push(movi)
    localStorage.setItem("listaMovs",listMov)
    //console.log(localStorage.setItem("listaMovs",listMov)); 
    //let listaMovs = localStorage.getItem("listaMovs")
}
else if(tipoMov == "Retiro"){
    movi = "<tr>" + 
    "<td>" + fech + "</td>" +
    "<td>" + tipoMov + "</td>" +
    "<td>" + retirar.value + "</td>" +
    "</tr>";
    listMov.push(movi)
    let movis = localStorage.setItem("listaMovs",listMov)
}
}
let listaMovs = localStorage.getItem("listaMovs")
console.log(localStorage.getItem("listaMovs"))
mov.innerHTML = localStorage.getItem("listaMovs");