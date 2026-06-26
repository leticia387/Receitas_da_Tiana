let indiceCor = 0;

function mostrarMensagem(nomeReceita) {

    alert("🍽️ Que legal! Você gostou da receita: " + nomeReceita);

    const ray = document.getElementById("ray");

    ray.classList.add("voando");

    setTimeout(() => {
        ray.classList.remove("voando");
    }, 5000);
}

function mudarCor() {

    const cores = [
        "#e8f5e9",
        "#c8e6c9",
        "#a5d6a7",
        "#81c784",
        "#dcedc8"
    ];

    indiceCor = (indiceCor + 1) % cores.length;

    document.body.style.backgroundColor = cores[indiceCor];
}

document.getElementById("btnMagia").addEventListener("click", mudarCor);

function criarBrilho() {

    for(let i = 0; i < 20; i++){

        const brilho = document.createElement("div");

        brilho.classList.add("brilho");

        brilho.style.left = Math.random() * window.innerWidth + "px";
        brilho.style.top = Math.random() * window.innerHeight + "px";

        document.body.appendChild(brilho);

        setTimeout(() => {
            brilho.remove();
        }, 2000);
    }
}

document.getElementById("btnMagia").addEventListener("click", () => {
    mudarCor();
    criarBrilho();
});

function avaliar(nota){

    alert(
      "⭐ Obrigado pela avaliação de "
      + nota +
      " estrelas!"
    );
  }
  
  function chefDia(){
  
    const curiosidades = [
  
      "Tiana foi a primeira princesa negra da Disney.",
  
      "O filme se passa em New Orleans.",
  
      "Ray é apaixonado pela estrela Evangeline.",
  
      "O sonho de Tiana era abrir seu próprio restaurante.",
  
      "Louis é um jacaré apaixonado por jazz."
  
    ];
  
    let sorteio =
    curiosidades[
    Math.floor(
    Math.random() *
    curiosidades.length)];
  
    document.getElementById("curiosidade")
    .innerHTML = sorteio;
  }
  
  function reservar(){
  
    let nome =
    document.getElementById("nome").value;
  
    let data =
    document.getElementById("data").value;
  
    document.getElementById("mensagemReserva")
    .innerHTML =
    "✅ Mesa reservada para "
    + nome +
    " no dia "
    + data;
  }
  
  window.addEventListener("scroll", ()=>{
  
    let altura =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  
    let progresso =
    (window.scrollY / altura) * 100;
  
    document.getElementById("barra").style.width =
    progresso + "%";
  });
  
  document.addEventListener("mousemove",(e)=>{
  
    const luz =
    document.createElement("div");
  
    luz.classList.add("luz");
  
    luz.style.left = e.pageX + "px";
    luz.style.top = e.pageY + "px";
  
    document.body.appendChild(luz);
  
    setTimeout(()=>{
      luz.remove();
    },1000);
  
  });