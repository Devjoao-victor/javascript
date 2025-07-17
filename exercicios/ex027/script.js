function gerar() {
var txtnum = window.document.getElementById('txtnum')
var num = Number(txtnum.value)
var resul
var res = window.document.getElementById('res')
var caixa = window.document.getElementById('caixa')
for (c = 1; c <= 10 ; c++) {
    caixa.style.height = '500px'
    var resul = num * c
    res.innerHTML += `<p>${num} x ${c} = ${resul}<p>`
}
}