var images  = ["imagens/image1.png" ,"imagens/image2.png" ,"imagens/image3.png" ,"imagens/image4.png", "imagens/image5.png", "imagens/image6.png", "imagens/image7.png", "imagens/image8.png"]	
var selected = []
var movimentos = 0
var score = 0

var cards = images.reduce(function(res, current, index, array){
	return res.concat([current, current])
},[])
//repetindo cada item do array uma vez para copiar as imagens
// entrada => [1,2,3] 
//saida =>[1,1,2,2,3,3]

function arrangeCard() {
  cards.sort(() => 0.5 - Math.random())
}
//randomizando as imagens no novo array 
//resultado => [3,1,2,3,2,1]

function check(){
  let firstCard = selected[0]
  let secondCard = selected[1]
  
  if (firstCard.alt === secondCard.alt) {
    firstCard.style.borderColor = "green"
    secondCard.style.borderColor = "green"
    score++
  }
  else{
  	firstCard.style.borderColor = "red"
    secondCard.style.borderColor = "red"
    
    //card voltando ao estado inicial pós erro
    setTimeout(function() {
    	firstCard.style.borderColor = "black"
 	  	secondCard.style.borderColor = "black"
			firstCard.style.borderWidth = 1
    	secondCard.style.borderWidth = 1
    	
  		firstCard.src = "imagens/doubt.jpg"
  		secondCard.src = "imagens/doubt.jpg"
    },2000)
    
  }
  if(score == images.length){alert("Obrigado por jogar!")
}
  selected = []
}
function create() {
		for (let card of cards){
          var image = document.createElement('img');
          image.setAttribute("src", "imagens/doubt.jpg")
          image.alt = card
  //o "id" usado para comparar as imagens é a url, que aqui foi usado para debug e acabou ficando
          document.body.appendChild(image)
        }
}

function flipCard(){
	this.style.borderColor = "yellow"
	this.style.borderWidth = 5
	this.src = this.alt
	selected.push(this)
	if(selected.length === 2){
		 movimentos++
		 check()
	}
	
}
//iniciando quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
  arrangeCard();
  create();
  imgs = document.querySelectorAll("img");
  Array.from(imgs).forEach(img =>
    img.addEventListener("click", flipCard)
  )
})


