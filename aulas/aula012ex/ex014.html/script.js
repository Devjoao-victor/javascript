var horario = new Date()
var hora = horario.getHours()
var mudancadefundo = window.document.getElementById('fundo')
var mudancadetexto = window.document.getElementById('textodehorario')
var mudancadefoto = window.document.getElementById('fotodehorario')

if (hora >= 6 && hora <= 12) {
    mudancadefundo.style.backgroundColor = '#CFBE90'
    mudancadetexto.innerHTML = `Agora são ${hora} horas.`
    mudancadefoto.style.backgroundImage = 'url(manha.jpg)'
    mudancadefoto.style.backgroundSize = 'cover'
} else if (hora >= 13 && hora < 18) {
    mudancadefundo.style.backgroundColor = '#A87A65'
    mudancadetexto.innerHTML = `Agora são ${hora} horas.`
    mudancadefoto.style.backgroundImage = 'url(tarde.jpg)'
    mudancadefoto.style.backgroundSize = 'cover'
} else {
    mudancadefundo.style.backgroundColor = '#484B4A'
    mudancadetexto.innerHTML = `Agora são ${hora} horas.`
    mudancadefoto.style.backgroundImage = 'url(noite.jpg)'
    mudancadefoto.style.backgroundSize = 'cover'    
}