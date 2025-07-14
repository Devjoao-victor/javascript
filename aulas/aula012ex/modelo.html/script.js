function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]  verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '50%'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criançaM.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'AdultoM.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criançaF.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'AdultoF.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}