// se clicar na bolinha verde, abre a div class parte-direita
document.querySelector('.bolinha-verde').onclick = function() {
    document.querySelector('.parte-direita').style.display = 'block';
}          
//verifica se a bolinha verde e seus elementos estão visiveis, se estiverem oculte ao clicar na bolinha vermelha
document.querySelector('.bolinha-vermelha').onclick = function() {
    if (document.querySelector('.parte-direita').style.display == 'block') {
        document.querySelector('.parte-direita').style.display = 'none';
    }
}   
       
