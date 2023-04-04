
var hor = document.getElementById("horas");
var tarifa = document.getElementById("tarifaH");

function getOperacion() {

    var Sueldo_bruto = (parseFloat(tarifa.value) * parseInt(hor.value)).toFixed(2);
    var Importe_Descuento = (0.15 * Sueldo_bruto).toFixed(2);
    var Sueldo_neto = Sueldo_bruto - Importe_Descuento;

    document.getElementById("resultados").value = "Sueldo bruto: " + Sueldo_bruto + "\n" +
        "Importe del descuento: " + Importe_Descuento + "\n" +
        "Sueldo neto: " + Sueldo_neto;

    return false;
}