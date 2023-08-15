//funcion para sumar
function suma(x, y) {
    return x + y;
}

//funcion para restar
function resta(x, y) {
    return x - y;
}

//funcion para multiplicar
function multiplicacion(x, y) {
    return x * y;
}

//funcion para dividir
function division(x, y) {
    return x / y;
}

//funcion para calulcar resultado segun opción elegida
function calcularResultado(option, num1, num2) {
    let resultado;
    switch (option) {
        case "suma":
            resultado = suma(num1, num2);
            break;
        case "resta":
            resultado = resta(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(num1, num2);
            break;
        case "division":
            resultado = division(num1, num2);
            break;
    }
    return resultado;
}

// función principal que delcara y captura variables, hace verificaciones, ejecuta la operación y la muestra
function main() 
{
    // declara e inicializa las variables accediendo al valor del elelmento
    let ope1 = document.getElementById("operando1").value;
    let ope2 = document.getElementById("operando2").value;
    let operacion = document.getElementById("selector").value;

    // calcula el resultado y lo guarda en la variable local "resultado" 
    let resultado = calcularResultado(operacion, parseFloat(ope1), parseFloat(ope2));

    // Verifica que ope1 no esté vacío
    if ( ope1 == '' )
    {
        alert('Primer número está Vacío');
    }    
    // Verifica que ope1 sea número
    else if ( isNaN(ope1) )
    {
        alert('Primer número No es un número');
    }
    // verifica que se haya seleccionado una opéración
    else if(operacion == '#')
    {
        alert('Debes seleccionar una operación de la lista');
    } 
    // Verifica que ope2 no esté vacío
    else if ( ope2 == '' )
    {
        alert('Segundo número está vacío');
    } 
    // Verifica que ope2 sea número
    else if ( isNaN(ope2) )
    {
        alert('Segundo número No es un número');       
    }
    // verifica que el ope2 sea distinto de 0 cuando la operación es una división   
    else if( ope2 == 0 && operacion == 'division') 
    {
        alert('¡Operación No Válida!\nNo es posible dividir por 0.\nColoca otro número en el segundo operador');       
    } 
    // si el tamaño del resultado es mayor a 18 muestra una alerta que lo truncará
    else if ( resultado.toString().split('').length > 18)
    {
        alert(`El número ${resultado}, excede el máximo permitido\nlo truncaremos para mostrarlo en el area de resultado`);
        document.getElementById('resultado').style.color = 'blue';
        document.getElementById("resultado").textContent = resultado.toString().split('').slice(0 , 17).join('');
    } 
    // toma resultado, lo convierte en string, lo parte, toma los primeros 18 lugares y lo vuelve a unir
    // completa el texto en el elemento <p></p> que tiene id "resultado"
    else 
    {
        document.getElementById('resultado').style.color = 'brown';
        document.getElementById("resultado").textContent = resultado.toString().split('').slice(0 , 17).join('');
    }
}

// función borrar que ejecutar el botón del mismo nombre
function borrar()
{
    document.getElementById("operando1").value = '';
    document.getElementById("operando2").value = '';
    document.getElementById("selector").value = '#';
    document.getElementById("resultado").textContent = 'Resultado';
}