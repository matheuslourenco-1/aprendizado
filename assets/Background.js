var backgrounds = [
    "https://images5.alphacoders.com/587/587597.jpg",
  ];
  
  // Seleciona uma imagem de fundo aleatória
  function setRandomBackground() {
    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = "url(" + backgrounds[randomIndex] + ")";
  }
  
  // Define a imagem de fundo assim que a página carrega
  window.onload = setRandomBackground;

