class PaginaHerois {
    constructor(seletorContainer, heroisUrl) {
        let _self = this;
        this.container = document.querySelector(seletorContainer);              
        this.botaoFiltrar = this.container.querySelector("#filtrar"); 
        this.heroContainer= this.container.querySelector(".heroes");  
        this.arrayHeroes =[];   
        
        this.botaoFiltrar.onclick = function (e) {
            e.preventDefault(); 
             _self.carregarHerois();
             _self.applyFilterHeroes();
        }        
		
        _self.getHeroes(heroisUrl);
    }

getHeroes(url){
    console.log("entrou");
    fetch(url)     
    .then(function(resposta){
        return resposta.json();
    })
    .then((resposta)=> {
        this.arrayHeroes= resposta;
        this.arrayHeroes.forEach(hero => {
            let html= this.template(hero);
            this.heroContainer.insertAdjacentHTML('beforeend', html);
        })
    })
}

applyFilterHeroes() {
    function filtro(){
    var filtrar = getHeroes().filter(resposta);
}      
    
}
	 
template(hero){
        return `
                <li class="herois">
                    <img class="imagemHeroi" src="${hero.images.sm}"/>
                
                    <p class="nome"> nome:${hero.name}</p>
                    
                    <p class="inteligencia">inteligencia:${hero.powerstats.intelligence}</p>
                    
                    <p class="força">força:${hero.powerstats.strength}</p>
                    
                    <p class="velocidade">velocidade:${hero.powerstats.speed}</p>
                    
                    <p class="resistencia">resistencia:${hero.powerstats.durability}</p>
                    
                    <p class="genero">genero:${hero.appearance.gender}</p>
                    
                    <p class="altura">altura:${hero.appearance.height[1]}</p>
                    
                    <p class="peso">peso:${hero.appearance.weight[1]}</p>
                </li>
            `;
}

}

// alert();
let URL =  "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
var pagina = new PaginaHerois("body", URL);

// arrow function () => {}