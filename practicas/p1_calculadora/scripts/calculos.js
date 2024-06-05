function calcular(operacion) {
    var val1 = parseFloat(document.getElementById("v1").value);
    var val2 = parseFloat(document.getElementById("v2").value);
    var res = document.getElementById("res");

    if (isNaN(val1) || isNaN(val2)) {
        res.innerHTML = "Datos nulos o incorrectos"
        if (isNaN(val1)) {
            document.getElementById("v1").focus()
        } else {
            document.getElementById("v2").focus()
        }
        return
    }

    var result;
    switch (operacion) {
        case 'suma':
            result = val1 + val2;
            break;
        case 'resta':
            result = val1 - val2;
            break;
        case 'multiplicacion':
            result = val1 * val2;
            break;
        case 'division':
            result = val1 / val2;
            break;
    }
    res.innerHTML = result;
}