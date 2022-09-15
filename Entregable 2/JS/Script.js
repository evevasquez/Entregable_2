let button = document.querySelector("#calcular");
button.onclick = function()
{
    let valor = 50000;
    let iva = 0.16;
    let total = 0;
    let valor_iva = 0;
    let valor_neto = 0;
    let select = document.querySelector("#cantidad1");
    total = valor * parseInt(select.value);
    valor_iva = valor * iva;
    valor_neto = total + valor_iva;

    document.querySelector('#total').innerHTML = total;
    document.querySelector('#iva').innerHTML = valor_iva;
    document.querySelector('#neto').innerHTML = valor_neto;
}
buerySelector('#neto').innerHTML = valor_neto;
