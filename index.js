
// VENTA DE AUTOS. CALCULAR IVA, IMPUESTOS
// DIAS LUNES Y SABADOS ES CON LLAVE EN MANO Y 20 % DE DESCUENTO
// DIAS MIERCOLES ES 30 % DTO 
// DIAS JUEVES 10 % DTO
// DIAS MARTES SIN IMPUESTOS!! (VIVIA EN SUIZA LA PIBA)

function descuento ( dia , precio ){
    if (dia == "Lunes" || dia == "Sabado"){
        const descuento = precio * 0.20;
        alert ("Te llevas el auto con llave en mano") 
        return descuento; }
    else if ( dia == "Miercoles"){
        const descuento = precio * 0.30
        return descuento
    }
    else if ( dia == "Jueves"){
        const descuento = precio * 0.10
        return descuento
    }
    else {
        const descuento = 0 ; 
        return descuento
    }
}

function iva (precio){
    const iva = precio * 0.21 
    return iva 
}

const precio = parseFloat (prompt("Ingrese el precio del vehículo")); 
const dia = prompt ("Ingrese el día de la compra"); 
let resultado = precio;

if ( dia == "Martes") {
    resultado = precio;  
    alert ("Felicitaciones! Hoy no pagas impuestos");
}
else {
    resultado = (precio - descuento ( dia , precio ) ) + iva (precio); 
}

console.log ("El precio de tu vehículo es: " + resultado);

document.write ("Compraste un auto por un precio de: " + resultado + " <br> " + " Día de compra: " + dia ); 