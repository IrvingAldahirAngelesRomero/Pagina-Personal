var p1,p2

function validaPass(){
    p1 = document.getElementById("pass").value;
    p2 = document.getElementById("pass2").value;

    if (p1!==p2) {        
        alert("Confirma correctamente tu Password");
        return;//Para que termine el programa
    }
} 