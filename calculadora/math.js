const Math = {}

function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(a,b){
    if(a==0 || b==0){
        console.log("No se puede dividir por 0")
    }else{
        return a/b
    }
}


/*exports.sumar = sumar
exports.restar = restar
exports.multiplicar = multiplicar
exports.dividir = dividir //exporta las funciones
*/

Math.sumar = sumar
Math.restar = restar 
Math.multiplicar = multiplicar
Math.dividir = dividir

module.exports = Math //exporta el objeto Math, variables, funciones

