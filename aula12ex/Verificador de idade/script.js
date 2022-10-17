function verificar(){
    var data =new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if(fano.value.length == 0 ||Number (fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        var genero =''
        var img =document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src','bebehomem1.png')
            }else if (idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src','jovemhomem1.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','homem1.png')
            }else {
                //Idoso
                img.setAttribute('src','idosohomem1.png')
            }   
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src','bebemulher1.png')
            }else if (idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src','jovemmulher1.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','mulher1.png')
            }else {
                //Idoso
                img.setAttribute('src','idosamulher1.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        //appendChild= serve para colocar um elemento
    }
}