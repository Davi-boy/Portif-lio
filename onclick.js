function addDivs(clickedDiv) {
    // Recupera o elemento pai da div clicada
    const parentDiv = clickedDiv.parentNode;


    if (parentDiv.querySelector('.new-box-link')) {

      const contatosMinimizar = parentDiv.querySelectorAll(".new-box-link");
      contatosMinimizar.forEach(link => link.remove());
      return; // Sai da função após a remoção
    }


    for (let i = 1; i <= 3; i++) {
      const link = document.createElement('a');
       
      link.classList.add('new-box-link');
      
      
      if (i===1){
        link.href = 'mailto:daviddevdobrasil@gmail.com?subject=Entrevista&body=Olá,%20gostaria%20de%20marcar%20uma%20entrevista%20com%20você.%20Tem%20algum%20horário%20disponível?';
      } else if (i===2){
        whatsappLink.href = 'https://wa.me/5581994702499?text=Olá,%20gostaria%20de%20marcar%20uma%20entrevista.%20Você%20tem%20algum%20horário%20disponível?';
      }else if(i===3){
        link.href = 'https://www.instagram.com/daviddevbrasil/profilecard/?igsh=MXAwZDYwd2N1N3BqNA==';
      }

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
