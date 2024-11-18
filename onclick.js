function addDivs(clickedDiv) {
    // Recupera o elemento pai da div clicada
    const parentDiv = clickedDiv.parentNode;

    // Verifica se as divs já foram adicionadas para evitar duplicação
    if (parentDiv.querySelector('.new-box-link')) {
      // Atualiza o texto do botão clicado para "Contatos+"
      clickedDiv.textContent = "Contatos+";

      // Remove as divs adicionadas
      const contatosMinimizar = parentDiv.querySelectorAll(".new-box-link");
      contatosMinimizar.forEach(link => link.remove());
      return; // Sai da função após a remoção
    }

    // Atualiza o texto do botão clicado para "Contatos-"
    clickedDiv.textContent = 'Contatos-';

    // Adiciona três links com divs internas
    for (let i = 1; i <= 3; i++) {
      const link = document.createElement('a');
      link.href = `#link-${i}`; // Define o destino do link
      link.classList.add('new-box-link');

      const newDiv = document.createElement('div');
      newDiv.classList.add('new-box');

      const img = document.createElement('img');
      if(i === 1){
        img.src = './gmail.png';
      }else if(i === 2){
        img.src = './whatsapp.png';
        
      }else if(i === 3){
        img.src = './insta.png';
      }
      img.classList.add('imgsconta');
      
      
       // Exemplo de imagem
      img.alt = 'Imagem ' + i;

      const text = document.createElement('span');
      
      if (i === 1){
        text.textContent = 'daviddevdobrasil@gmail.com';
      }else if (i === 2){
        text.textContent = '+55 81 994702499';
      }else if (i === 3){
        text.textContent = '@daviddev';
      }
      
      text.classList.add('textconta');
      

      newDiv.appendChild(img);
      newDiv.appendChild(text);
      link.appendChild(newDiv);

      // Insere o link ao lado da div clicada
      parentDiv.appendChild(link);
    }
  }
